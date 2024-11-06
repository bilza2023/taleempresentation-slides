<script>

 import { onMount } from "svelte";  
 import CanvasPlayer from "../../lib/canvasPlayer/CanvasPlayer.svelte";
 import loadAssets from "../assets/loadAssets";
 import getNewItem from "./getNewItem";
 import {slide as slideData} from "../../lib/demoSlides/canvasSlide";
  
 import Toolbar from "./Toolbar.svelte";

 let currentTime = 0;
 let slide =null;
 let items =null;
 let assets = null;
 
 
onMount(async()=>{
 
  assets = await loadAssets();
  slide = slideData[0]; 
  items = slide.items; 
});

/**
 * 
 * @param newItemExtraFn
 * newItemExtraFn is a function that is passed as argument ... it return the item.itemExtra obj.
 */
function addNewItem(newItemExtraFn) {
  // debugger;
  const newItemExtra = newItemExtraFn();
  const newItem = getNewItem(); // get an item for which we already have item.itemExtra
  newItem.itemExtra = newItemExtra;    
  items.unshift(newItem);      
  items =  [...items];

}
function postDraw(ctx) {
  ctx.fillStyle = 'red';
  ctx.font = '60px Arial';
  ctx.textBaseline = 'top';
  ctx.globalAlpha = 1;

  // Draw the text
  ctx.fillText("This is a Warning..!", 100, 100);
}
function preDraw() {
  // console.log("postDraw");
}
function eventMouseMove() {
  console.log("eventMouseMove");
}
function eventMouseUp() {
  console.log("eventMouseUp");
}
function eventMouseDown() {
  console.log("eventMouseDown");
}


</script>
<!-- 
slide should have
items={slide.items}        
slideData={slide.data}
slideExtra={slide.slideExtra} 
-->

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class=" h-full w-full bg-gray-800 text-white p-2 m-0" >
{#if slide && assets}

<div class="flex justify-center px-4 py-0">
  <Toolbar icons={assets.icons} {addNewItem} />

</div>

<CanvasPlayer
 
{currentTime} 
      
  {items}        
  slideData={slide.data}
  slideExtra={slide.slideExtra} 

  {assets}

  {preDraw}
  {postDraw}

  {eventMouseMove}
  {eventMouseUp}
  {eventMouseDown}

  setPulse={()=>{}}

/>

{/if}
</div>
