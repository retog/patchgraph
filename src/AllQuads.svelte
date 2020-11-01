<script>
  import * as Factory from "@rdfjs/data-model";
  import Dataset from "@rdfjs/dataset";
  import { DatasetEditor } from "rdfjs-svelte";
  import { Quadstore } from "quadstore";
  import leveljs from "level-js";

  let dataset = Dataset.dataset([]);

  let previousQuads;
  
  const load = async function () {
    console.log("loading data from store");
    const store = new Quadstore({
      dataFactory: Factory,
      backend: leveljs("quadstore"),
    });
    await store.open();
    //const pattern = {graph: Factory.namedNode('http://ex.com/g')};
    const { items } = await store.get({});
    previousQuads = items;
    items.forEach(quad => dataset.add(quad))
    dataset = dataset //svelte yahee!
    //dataset = Dataset.dataset(items);
    await store.close()
  };
  load().catch((e) => console.log(e));
  const updateStore = async function (currentQuads) {
    if (!previousQuads) return
    const store = new Quadstore({
      dataFactory: Factory,
      backend: leveljs("quadstore"),
    });
    await store.open();
    await store.multiPatch(previousQuads, currentQuads)
    previousQuads = currentQuads
    await store.close()
  }
  $: {
    console.log("dataset", dataset);
    updateStore(Array.from(dataset.quads)).then(() => console.log('store updated'));
  }
</script>

<main>
  <h1 id="resr">Dataset</h1>
  <DatasetEditor bind:value={dataset} />
</main>
