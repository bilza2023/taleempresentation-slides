<script>
    import { onMount } from "svelte";
  import SharedCanvasBase from './SharedCanvasBase.svelte';

  export let currentTime;
  export let slideData;
  export let items;
  export let slideExtra;
  export let assets;
  
  onMount(async () => {
        debugger;
    });
</script>

{#if assets}
<SharedCanvasBase
  {currentTime}

  {slideData}
  {items}
  {slideExtra}
  
  {assets}
  
  isEditorMode={false}
/>
{/if}