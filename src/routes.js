import Entry from './Entry.svelte'
import Components from './Components.svelte'
import Sparql from './Sparql.svelte'

const routes = { 
  
  '/':Entry,
  '/index.html':Entry,
  '/components': Components,
  '/sparql': Sparql,
  '*':Entry
}
export { routes }