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
  <p>
    <a href="https://svelte.dev/">Svelte</a>
    components to edit
    <a href="http://rdf.js.org/">RDFSJS</a>
    objects such as Literals, NamedNodes and Datasets.
  </p>
  <p>
    The sources are available on
    <a href="https://github.com/linked-solutions/rdfjs-svelte">GitHub</a>
    .
  </p>
  <p>
    Also check out
    <a href="https://rdfjs-vue.linked.solutions/">RDFSJS Vue</a>
    which offers similar functionality for
    <a href="https://vuejs.org/">Vue</a>
    instead of Svelte.
  </p>
  <p>Try out the Dataset Browser below or any component <a href="/components" use:link>here</a>.</p>
  <DatasetBrowser
    bind:value={dataset}
    subject="http://example.org/person/sheldon-cooper"
    graph={Factory.defaultGraph()} />
</main>
