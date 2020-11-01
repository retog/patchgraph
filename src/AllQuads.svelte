<script>
  import * as Factory from "@rdfjs/data-model";
  import Dataset from "@rdfjs/dataset";
  import { DatasetEditor } from "rdfjs-svelte";
  import {Quadstore} from 'quadstore'
  import leveljs from 'level-js';

  let dataset = Dataset.dataset([]);


    const load = async function() {

     const store = new Quadstore({
        dataFactory: Factory,
        backend: leveljs('quadstore'),
      });
      await store.open();
      //const pattern = {graph: Factory.namedNode('http://ex.com/g')};
      const { items } = await store.get({});
      dataset = Dataset.dataset(items)
    }
    load().catch(e => console.log(e))
  $: console.log("dataset", dataset);
</script>

<main>

  <h1>Dataset</h1>
  <DatasetEditor bind:value={dataset} />

</main>
