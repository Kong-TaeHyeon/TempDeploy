import * as server from '../entries/pages/(user)/car/search/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user)/car/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user)/car/search/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CXDVmJzA.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DvrqN-x1.js","_app/immutable/chunks/stores.DcRS8l2D.js","_app/immutable/chunks/entry.BvNWPT6Q.js","_app/immutable/chunks/carEx.B83EIgPk.js"];
export const stylesheets = [];
export const fonts = [];
