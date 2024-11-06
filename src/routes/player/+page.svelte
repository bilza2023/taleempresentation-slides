<script>

 import {onMount} from "svelte";  
 import SharedCanvasBase from "../../lib/canvasPlayer/SharedCanvasBase.svelte";
 import loadAssets from "../assets/loadAssets";
 import {slide as slideData} from "../../lib/demoSlides/canvasSlide";
  
 let currentTime = 0;
 let slide =null;
 let assets = null;
 
 
onMount(async()=>{
  debugger;
  assets = await loadAssets();
  slide = slideData[0]; 
});

</script>
<!-- 
slide should have
items={slide.items}        
slideData={slide.data}
slideExtra={slide.slideExtra} 
-->

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class=" h-full w-full bg-gray-800 text-white p-0 m-0" >
{#if slide && assets}

<SharedCanvasBase
 
{currentTime} 
      
  items={slide.items}        
  slideData={slide.data}
  slideExtra={slide.slideExtra} 

  {assets}
  setPulse={()=>{}}
  isEditorMode={false}

/>

{/if}
</div>
