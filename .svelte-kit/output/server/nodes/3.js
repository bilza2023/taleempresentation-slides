

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/canvasEditor/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DLxQPxlS.js","_app/immutable/chunks/scheduler.BnZUYRQB.js","_app/immutable/chunks/index.Da715u9Q.js","_app/immutable/chunks/OpenFileButton.iOEySLtQ.js","_app/immutable/chunks/index.BrkoROWa.js","_app/immutable/chunks/SaveFileButton.CevLkQpK.js"];
export const stylesheets = ["_app/immutable/assets/OpenFileButton.BhBxKCG4.css"];
export const fonts = [];
