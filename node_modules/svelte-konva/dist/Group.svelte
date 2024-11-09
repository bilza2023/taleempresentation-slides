<!--
@component
The Group component needs to be placed inside a svelte-konva Layer or Group component. 

The Group component automatically groups all components that are placed inside it.

### Usage:
```tsx
<Group>
	Place components that should be grouped here
</Group>
```

### Static config:
By default svelte-konva will automatically update your config prop on `dragend` and `transformend` events to match the config state (position, rotation, scale, ...) with the internal Konva state. 
If you additionally bind the config prop your reactive blocks will also be triggered once this happens. 
There might be cases where this behavior is not beneficial in this case you can disable it by passing the `staticConfig = true` prop to the component.

Further information: [Konva API docs](https://konvajs.org/api/Konva.Group.html), [svelte-konva docs](https://konvajs.org/docs/svelte)
-->
<script>import Konva from 'konva';
import { onMount, onDestroy, createEventDispatcher } from 'svelte';
import { writable } from 'svelte/store';
import { Container, getParentContainer, setContainerContext } from './util/manageContext';
import { registerEvents } from './util/events';
import { copyExistingKeys } from './util/object';
export let config = {};
export let handle = new Konva.Group(config);
export let staticConfig = false;
let inner = writable(null);
let dispatcher = createEventDispatcher();
let isReady = false;
$: if (handle) {
    handle.setAttrs(config);
}
let parent = getParentContainer();
onMount(() => {
    $parent.add(handle);
    if (!staticConfig) {
        handle.on('transformend', () => {
            copyExistingKeys(config, handle.getAttrs());
            config = config;
        });
        handle.on('dragend', () => {
            copyExistingKeys(config, handle.getAttrs());
            config = config;
        });
    }
    registerEvents(dispatcher, handle);
    inner.set(handle);
    isReady = true;
});
onDestroy(() => {
    if (handle) {
        handle.destroy();
    }
});
setContainerContext(Container.Group, inner);
</script>

{#if isReady}
	<slot />
{/if}
