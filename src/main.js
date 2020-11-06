import App from './App.svelte';

const target = typeof root === 'undefined' ? document.body : root;

const app = new App({
  target
});

export default app;