<script>
  import CanvasEditorPlayer  from "./CanvasEditor/CanvasEditorPlayer.svelte";
  import SelectItemMenu  from     "./CanvasEditor/SelectItemMenu.svelte";

export let items;
export let slideExtra;  
export let assets;  
export let showAddToolbar=true;  
</script>

<div class="flex w-full bg-gray-700 text-white p-2 min-h-screen ">

  <div class='w-9/12'>
  <CanvasEditorPlayer
   bind:items = {items}
   slideExtra = {slideExtra}
   {assets}
   {showAddToolbar}
  />
</div>

<div class='w-3/12'>
  <SelectItemMenu {items}    />
</div>



</div>