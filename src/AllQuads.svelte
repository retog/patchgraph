<script>
  import * as Factory from "@rdfjs/data-model";
  import Dataset from "@rdfjs/dataset";
  import { SimpleLiteralEditor, HtmlEditor, 
      BlankNodeEditor, NamedNodeEditor, 
      ExistingTermEditor, TermEditor,
      QuadEditor, DatasetEditor, DatasetBrowser } from "rdfjs-svelte";
  import {link} from 'svelte-spa-router'
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

  <h2>Dataset</h2>
  <DatasetEditor bind:value={dataset} />

</main>
