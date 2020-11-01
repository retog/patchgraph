<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
  import { link } from 'svelte-spa-router'

  document.title = 'MyQuads'
</script>
<ul>
  <li><a href="/" use:link>Entry page</a></li>
  <li><a href="/sparql" use:link>Sparql</a></li>
  <li><a href="/all-quads" use:link>All quads</a></li>
</ul>

<Router {routes} />