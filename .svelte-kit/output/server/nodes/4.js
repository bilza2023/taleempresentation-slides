

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/canvasPlayer/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Cpv8pM77.js","_app/immutable/chunks/scheduler.BnZUYRQB.js","_app/immutable/chunks/index.Da715u9Q.js","_app/immutable/chunks/OpenFileButton.iOEySLtQ.js","_app/immutable/chunks/index.BrkoROWa.js"];
export const stylesheets = ["_app/immutable/assets/OpenFileButton.BhBxKCG4.css"];
export const fonts = [];
