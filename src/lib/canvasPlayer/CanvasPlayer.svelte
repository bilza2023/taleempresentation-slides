<script>
  //@ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import DrawLib from "../drawLib/drawLib";
  import itemToObject from "../canvasEditor/componentObjects/itemToObject";

  export let items;
  export let currentTime;
  export let bgImages;
  export let spriteImgArray;

  export let itemExtra = {};
  export let itemArray = [];

  let canvas;
  let ctx;
  let drawLib;
  let interval;
  let isInitialized = false;
  let itemObjects = [];

  const fnList = {};

  function updateItemObjects() {
    itemObjects = [];
    // debugger;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemObj = itemToObject(item, fnList, spriteImgArray);
      if (itemObj) {
        itemObjects.push(itemObj);
      }
    }
  }

  $: {
    if (items.length > 0 && isInitialized) {
      updateItemObjects();
    }
  }

  function gameLoop() {
    try {
      if (!itemObjects) return;
      
      if(!itemExtra.bgGlobalAlpha){itemExtra.bgGlobalAlpha=1;}

drawLib.clear(itemExtra.backgroundColor);

if(itemExtra.bgImg !== "null"){
for (let i = 0; i < bgImages.length; i++) {
const element = bgImages[i];
if(element.name == itemExtra.bgImg){
  // debugger;
  drawLib.bgImage(element.img,itemExtra.bgGlobalAlpha || 1);
  break;
}
}
}         

if(itemExtra.showGrid){
drawLib.grid(itemExtra.cellWidth, itemExtra.cellHeight, itemExtra.gridLineWidth, itemExtra.gridLineColor);
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
      for (let i = 0; i < itemObjects.length; i++) {
        const item = itemObjects[i];
        try {
          if (item.isVisible(currentTime)) {
            item.draw(drawLib.ctx, currentTime, item.itemExtra);
          }
        } catch (itemError) {
          console.error(`Error drawing item at index ${i}:`, itemError);
          console.error('Item object:', item);
        }
      }
    } catch (error) {
      console.error('Error in gameLoop:', error);
      console.error('Error stack trace:', error.stack);
      if (itemObjects) {
        console.error('Number of itemObjects:', itemObjects.length);
      }
      if (itemExtra) {
        console.error('Extra object:', itemExtra);
      }
    }
  }

  async function initializeCanvas() {
    if (!canvas) return false;
    
    if (interval) {
      clearInterval(interval);
    }

    ctx = canvas.getContext("2d");
    drawLib = new DrawLib(canvas, ctx);

    isInitialized = true;
    updateItemObjects();
    
    interval = setInterval(gameLoop, 20);
    return true;
  }

  onMount(async () => {
    // debugger;
    if (canvas) {
      await initializeCanvas();
    }
  });

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });

  function handleMouseMove(e) {}
  function handleMouseDown(e) {}
  function handleMouseUp(e) {}
  function handleClick(e) {}
</script>

<div class="flex justify-center w-full">
  <canvas
    class="w-full m-2"
    bind:this={canvas}
    width={itemExtra.canvasWidth}
    height={itemExtra.canvasHeight}
    on:mousemove={handleMouseMove}
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
    on:click={handleClick}
  ></canvas>
</div>