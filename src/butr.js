import objAssign from 'object-assign'
import { To } from './to'
import { Marker } from './marker'
import { AutoAnchors } from './autoAnchors'
import { AutoSidebar } from './autoSidebar'
import { StickyNav } from './stickyNav'
import { State } from './state'

const defaults = {
  // To
  target: 0,
  direction: 'y',
  keepHash: true,
  speed: 1,
  afterTo: null,
  scrollOffset: 0,
  // Sidebar
  olClass: 'Butr__Sidebar__List',
  liClass: 'Butr__Sidebar__Item',
  aClass: 'Butr__Sidebar__Link',
  // Marker
  scrollingElement: null,
  duration: 320,
  markerClass: 'Butr__Marker',
  activeClass: 'Butr__Sidebar__Link--active',
  // Sticky
  distanceTop: 0,
  mediaQuery: false,
}

const init = (options) => {
  State.settings = objAssign({}, defaults, options)
  if (options.To || options.AutoAnchors) To()
  if (options.AutoSidebar) AutoSidebar()
  if (options.AutoAnchors) AutoAnchors()
  if (options.Marker) Marker()
  if (options.StickyNav) StickyNav()
}

window.Butr = {
  init,
  // Expose to as method for using with anything else
  to: To
}
