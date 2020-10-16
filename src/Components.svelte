<script>
  import * as Factory from "@rdfjs/data-model";
  import Dataset from "@rdfjs/dataset";
  import { SimpleLiteralEditor, HtmlEditor, 
      BlankNodeEditor, NamedNodeEditor, 
      ExistingTermEditor, TermEditor,
      QuadEditor, DatasetEditor, DatasetBrowser } from "rdfjs-svelte";
  import {link} from 'svelte-spa-router'

  let literal = Factory.literal(
    "My first literal",
    "http://www.w3.org/2001/XMLSchema#string"
  );
  let htmlLiteral = Factory.literal(
    "Hello <strong>world</strong>",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML"
  );
  //$: console.log("htmlLiteral", htmlLiteral);
  let blankNode1 = Factory.blankNode();
  let namedNode1 = Factory.namedNode("http://example.org/foo");
  let namedNode2 = Factory.namedNode("http://example.org/other");
  let newValue = null;
  let newValue2 = null;
  let quad1 = Factory.quad(Factory.namedNode("http://example.org/Alice"), 
          Factory.namedNode("http://example.org/knows"), 
          Factory.namedNode("http://example.org/Bob"), Factory.defaultGraph());
  //$: console.log("quad1", quad1);
  window.q1 = quad1;
  let dataset = Dataset.dataset([Factory.quad(Factory.namedNode("http://example.org/Bill"), 
          Factory.namedNode("http://example.org/knows"), 
          Factory.namedNode("http://example.org/Berta"), Factory.defaultGraph()),
          Factory.quad(Factory.namedNode("http://example.org/Charlie"), 
          Factory.namedNode("http://example.org/knows"), 
          Factory.namedNode("http://example.org/Carl"), Factory.defaultGraph()),
          Factory.quad(Factory.namedNode("http://example.org/Carl"), 
          Factory.namedNode("http://example.org/admires"), 
          Factory.namedNode("http://example.org/Bill"), Factory.defaultGraph()),
          Factory.quad(Factory.namedNode("http://example.org/Berta"), 
          Factory.namedNode("http://example.org/knows"), 
          Factory.namedNode("http://example.org/Charlie"), Factory.defaultGraph()),
          Factory.quad(Factory.namedNode("http://example.org/Bill"), 
          Factory.namedNode("http://example.org/loves"), 
          Factory.namedNode("http://example.org/Alice"), 
          Factory.namedNode("http://example.org/BillsSecrets"))]);

  $: console.log("dataset", dataset);
</script>

<style>
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
  <a href="/" use:link>&lt;- back to entry page</a>
  <h1>Demo of RDFJS-Svelte components</h1>
  <p>
  This page shows various components, many components are shown twice with the same variable to demonstrate reactivity.
  </p>
  <HtmlEditor bind:value={htmlLiteral} />
  Same: <ExistingTermEditor bind:value={htmlLiteral} />
  <hr>
  <SimpleLiteralEditor bind:value={literal} />
  Same: <ExistingTermEditor bind:value={literal} />
  <hr>
  <NamedNodeEditor bind:value={namedNode1} /><br />
  Same: <ExistingTermEditor bind:value={namedNode1} />
  <hr>
  <BlankNodeEditor bind:value={blankNode1} />
  same: <ExistingTermEditor bind:value={blankNode1} />
  <hr>
  <TermEditor bind:value={newValue} />
  Same: <TermEditor bind:value={newValue} />
  <hr>
  Limited types:
  <TermEditor bind:value={newValue2} termTypes="['BlankNode', 'NamedNode', 'DefaultGraph']" />
  <hr>
  Existing resource:
    <TermEditor bind:value={namedNode2} />
<hr>
  <QuadEditor bind:value={quad1} labels />
  Same: <QuadEditor bind:value={quad1} />

  <h2>Dataset</h2>
  <DatasetEditor bind:value={dataset} />
  <h2>Dataset Browser</h2>
  <DatasetBrowser bind:value={dataset} 
  subject="http://example.org/Bill" graph={Factory.defaultGraph()} />
</main>
