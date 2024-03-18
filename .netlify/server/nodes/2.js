import * as server from '../entries/pages/(user)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(user)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(user)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BPDhgZNb.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DvrqN-x1.js","_app/immutable/chunks/entry.B8IucYA0.js","_app/immutable/chunks/stores.KlYEn5Nc.js"];
export const stylesheets = [];
export const fonts = [];
