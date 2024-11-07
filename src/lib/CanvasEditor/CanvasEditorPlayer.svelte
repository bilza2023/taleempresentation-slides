<script>
/**
 * 7-Nov-2024 CanvasEditorPlayer is just a wrapper over CanvasPlayer. it is JUST A wrapper..so that it can edit "items" and they are displayed in CanvasPlayer. NO CHANGES IN CANVAS PLAYER.
 * DO NOT OPEN CanvasPlayer......!!!!!!!!!!!!!!!!!!
 - Objective : This component will
    1- pick selectedITem (using isHit and mouse-click)
    2- draw handles around it
    3- hand it over to some one for other things
//--- toolbar is not its prblem

///---???? i dont not need any components (svelte) for 1:drawing handles , 2:selecting selcted-item, 3: editing selected item values 4: animation (in player) 5: goto-commands
==> since all these are js code and not svelte components... 
==> it means that i need to just select the selected-item AND ALLOW PLUGINS!!! for drawing handles and editing item vlaues etc etc 
 */
//@ts-nocheck

import { onMount,onDestroy } from "svelte";  
import itemToObject from "../componentObjects/itemToObject";
import CanvasPlayer from "../canvasPlayer/CanvasPlayer.svelte";
import SelectedItem from "./SelectedItem";

  export let currentTime = 0; // pulse ???
  export let items; // items are currentSlide.items (it should just be slide)
  export let slideData; // items are currentSlide.items (it should just be slide)
  export let slideExtra;   //this should be slideExtra not to be confused with item.slideExtra
  export let assets;
  export let itemObjects = []; // Can be passed directly in editor mode
  let selectedItemIndex = 0; //this should not be export

  let selectedItem = new SelectedItem();

  let interval=null;

  onMount(async () => {
    interval = setInterval(update, 20); 
    
  });
  onDestroy(async () => {
    clearInterval(interval); 
    
  });
function update(){
    console.log("update");
}
///////--this code is from canvas-player
function updateItemObjects(){
      itemObjects = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemObj = itemToObject(item, {}, assets.spriteImages);
          if (itemObj) {
            itemObjects.push(itemObj);
          }
        }
        console.log("itemObjects",itemObjects);
  }
  $: {
    debugger;
    items;
    updateItemObjects();
  }
  
async function eventClick(e){
  const isHit = await selectedItem.checkHit(e,itemObjects);
  console.log("isHit",isHit);
  
}
function postDraw(ctx){
  selectedItem.drawHandles(ctx);
}
</script>

{#if items}
<div class='p-2 bg-stone-900'>
  
  <CanvasPlayer   
  {currentTime}
  slideData={slideData} 
  {items}        
  slideExtra={slideExtra} 
  {assets}
  eventClick={eventClick}
  {postDraw}
  />
    
</div>

{/if}