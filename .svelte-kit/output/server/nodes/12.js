import * as server from '../entries/pages/signin/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signin/+page.server.js";
export const imports = ["_app/immutable/nodes/12.DH_xu4qH.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DvrqN-x1.js"];
export const stylesheets = [];
export const fonts = [];
