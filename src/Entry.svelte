<script>
  import * as Factory from "@rdfjs/data-model";
  import Dataset from "@rdfjs/dataset";
  import * as N3 from "n3";
  import {link} from 'svelte-spa-router'
  import {
    DatasetBrowser,
  } from "rdfjs-svelte";

  global.setImmediate = function(f) {
    setTimeout(f,0);
  }
  let dataset = Dataset.dataset([]);
  const parser = new N3.Parser();

  fetch("./tbbt.nt")
    .then((r) => r.text())
    .then((t) => {
      parser.parse(
        t,
        (error, quad, prefixes) => {
          if (quad) {
            console.log(JSON.stringify(quad));
            dataset.add(quad);
          }
          else {
            console.log("# Tjhjhl, folks!", prefixes);
            console.log("dataset", dataset);
            dataset = dataset;
          }
        }
      );
    });


  $: console.log("dataset", dataset);
</script>

<style>
  * {
    box-sizing: border-box;
  }

  main {
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>RDFJS-Svelte</h1>

  <p>Try out the Dataset Browser below or any component <a href="/components" use:link>here</a>.</p>
  <p>Use SPARQL <a href="/sparql" use:link>here</a>.</p>
  <DatasetBrowser
    bind:value={dataset}
    subject="http://example.org/person/sheldon-cooper"
    graph={Factory.defaultGraph()} />
</main>
