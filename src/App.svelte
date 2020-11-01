<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'

  document.title = 'MyQuads'
</script>

<style>
  ul#menu li {
    display:inline;
  }

  ul#menu li:not(:first-child) ::before {
    content:' | ';
  }
  :global(a.active) {
      color: red;
  }
  :global(h1) {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<ul id="menu">
  <li><a href="/" use:link use:active>Entry page</a></li>
  <li><a href="/sparql" use:link use:active>Sparql</a></li>
  <li><a href="/all-quads" use:link use:active>All quads</a></li>
</ul>

<Router {routes} />