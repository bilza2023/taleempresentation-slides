I have svelte components in following hierarchy

SelectedItem.svelte
HandleManager.js
Handle.js

I think the HandleManager.js and Handle.js should be merged into 1 simple object (or some of the functionlaity of HandleManager can be moved to SelectedItem ). Most of the methods of the HandleManager are simple loops over all handles we can place this array of handles in SelectedItem.svelte.