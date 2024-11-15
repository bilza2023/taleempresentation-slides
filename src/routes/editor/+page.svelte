<script>
  import {CanvasEditor}  from "$lib";
  import {onMount} from "svelte";
  import {Slide} from "../../lib/canvas/samples/demo";
  import {slide as NewSlide} from "./slide.js";
  import loadAssets from "../assets/loadAssets";
  import getNewCanvasSlide from "../../lib/canvas/CanvasEditor/getNewCanvasSlide.js";
  
  let slide = null;
  let showAddToolbar = true;
  let assets = null;

  function newPresentation(){
    slide = NewSlide;
  }

  async function handleFileUpload(event) {
  
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await file.text();
        // Remove any export/import statements and get the object
        const cleanedText = text.replace(/export\s+const\s+\w+\s*=\s*/, '');
        // Using Function constructor to safely evaluate the JS object
        const slideData = (new Function(`return ${cleanedText}`))();
        // debugger;
        // const slideData = JSON.parse(cleanedText);
        slide = slideData;
        console.log("slide", slide);
      } catch (error) {
        console.error('Error loading JS file:', error);
        alert('Error loading file. Please ensure it is a valid JS file with a slide object.');
      }
    }
  }

  onMount(async()=>{
    assets = await loadAssets(); 
    slide = Slide;
  });

  function logSlide(items,slideExtra){
    slide = getNewCanvasSlide();
    slide.items = items;
    slide.slideExtra = slideExtra;
    const jsonString = JSON.stringify(slide, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'slide.json';
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<div class="flex p-0 m-0 bg-gray-900 text-white">
  <button class="text-[10px]" on:click={newPresentation}>New 📰</button>
  
  <!-- Add file input button -->
  <label class="text-[10px] ml-2 cursor-pointer">
    Upload 📂
    <input 
      type="file" 
      accept=".js"
      on:change={handleFileUpload}
      class="hidden"
    />
  </label>
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