<script>
  import {link} from 'svelte-spa-router'

  global.setImmediate = function(f) {
    setTimeout(f,0);
  }

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
  <p>MyQuads works thanks to the following projects:</p>
  <ul>
    <li><a href="https://github.com/beautifulinteractions/node-quadstore">Quadstore</a></li>
    <li><a href="https://github.com/TriplyDB/Yasgui">Yasgui</a></li>
    <li><a href="https://github.com/linked-solutions/rdfjs-svelte">rdfjs-svelte</a></li>
  </ul>
</main>
