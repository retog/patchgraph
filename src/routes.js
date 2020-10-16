import Entry from './Entry.svelte'
import Components from './Components.svelte'

const routes = { 
  
  '/':Entry,
  '/index.html':Entry,
  '/components': Components,
  '*':Entry
}
export { routes }