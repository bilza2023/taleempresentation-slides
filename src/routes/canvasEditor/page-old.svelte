<script>
  import {CanvasEditor}  from "$lib";
  import {onMount} from "svelte";
  import {Slide} from "../../lib/canvas/samples/demo";

  // import audioData from "./audioData.js";
  import {slide as NewSlide} from "./slide.js";
  import loadAssets from "../assets/loadAssets";
  import getNewCanvasSlide from "../../lib/canvas/CanvasEditor/getNewCanvasSlide.js";
  
  let slide = null;
  let showAddToolbar = true;
  let assets=null;

function newPresentation(){
slide = NewSlide;
}
onMount(async()=>{
  assets = await loadAssets(); 
  slide = Slide;
  // debugger;

});

function logSlide(items,slideExtra){
  slide = getNewCanvasSlide();
  slide.items = items;
  slide.slideExtra = slideExtra;
    // Convert array to JSON string
    const jsonString = JSON.stringify(slide, null, 2);
    // Create a blob with the JSON data
    const blob = new Blob([jsonString], { type: 'application/json' });
    // Create a temporary anchor element
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'slide.json';
    // Trigger download
    a.click();
    // Clean up the URL object
    URL.revokeObjectURL(url);
}
//--logSlide is being sent to CanvasEditor is it Good ????
</script>
<div class="flex p-0 m-0 bg-gray-900 text-white">
  <button class="text-[10px]" on:click={newPresentation}>New 📰</button>

</div>

<div class="w-full bg-gray-700 text-white py-2 px-1 min-h-screen ">

{#if slide && assets}
  <CanvasEditor

   bind:items = {slide.items}
   slideExtra = {slide.slideExtra}
   {assets}
   {showAddToolbar}
   {logSlide}
  />

{/if}

</div>