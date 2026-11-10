export const pageView = {
  '/bs-layout':()=>import('./bs-layout/index.vue').then(m => m["default"]),
  '/gdMap':()=>import('./gdMap/index.vue').then(m => m["default"]),
  '/page3':()=>import('./page3/index.vue').then(m => m["default"]),
  '/test-map':()=>import('./test-map/index.vue').then(m => m["default"]),
  '/test-map-tool':()=>import('./test-map-tool/index.vue').then(m => m["default"])
}