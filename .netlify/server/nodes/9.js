import * as server from '../entries/pages/(user)/dashboard/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user)/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user)/dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/9.DffhHv4S.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DvrqN-x1.js","_app/immutable/chunks/stores.DcRS8l2D.js","_app/immutable/chunks/entry.BvNWPT6Q.js"];
export const stylesheets = [];
export const fonts = [];
