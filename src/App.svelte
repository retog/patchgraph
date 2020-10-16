<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'

  document.title = 'RDFJS Svelte'
</script>

<Router {routes} />