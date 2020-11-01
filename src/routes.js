import Entry from './Entry.svelte'
import AllQuads from './AllQuads.svelte'
import Sparql from './Sparql.svelte'

const routes = { 
  
  '/':Entry,
  '/index.html':Entry,
  '/all-quads': AllQuads,
  '/sparql': Sparql,
  '*':Entry
}
export { routes }