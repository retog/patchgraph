<script>

  global.setImmediate = function(f) {
    setTimeout(f,0);
  }

</script>

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
