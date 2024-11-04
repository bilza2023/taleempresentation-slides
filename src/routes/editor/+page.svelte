<script>
  import CanvasEditor  from "../../lib/canvasEditor/CanvasEditor.svelte";
  import audioData from "./audioData.js";
  import {slides as defualtSlide} from "./slides.js";
  import icons from "../../lib/icons.js";
  let currentTime=0;

  import AppToolbar from "./AppToolbar.svelte";
  let slides = defualtSlide;
  let canvasSlide = slides[0];
  let showToolbar=true;

function newPresentation(){
slides = defualtSlide;
}

</script>

<div class="w-full bg-gray-800">

{#if slides}
  
  <CanvasEditor
   bind:startTime = {canvasSlide.startTime}
   bind:endTime = {canvasSlide.endTime}
   bind:items = {canvasSlide.items}
   extra = {canvasSlide.extra}
   currentSlide={canvasSlide}
   {icons}
   {currentTime}
   selectedItemIndex={0}
  />

{/if}

</div>