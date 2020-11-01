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
  <h1>MyQuads</h1>

  <p>Store triples and quads in your browser and use SPARQL to retreive them.</p>
  <ul>
    <li>[Quadstore](https://github.com/beautifulinteractions/node-quadstore)
    </li>
    <li>[Yasgui](https://github.com/TriplyDB/Yasgui)</li>
    <li>[rdfjs-svelte](https://github.com/linked-solutions/rdfjs-svelte)</li>
  </ul>
</main>
