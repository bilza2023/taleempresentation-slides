<script>
  
  import { onMount, onDestroy } from "svelte";
  import itemToObject from "./itemObjects/itemToObject";
  import CanvasPlayer from "./canvasPlayer/CanvasPlayer.svelte";
  import SelectedItem from "./CanvasEditor/SelectedItem";
  import AddToolbar from "./CanvasEditor/AddToolbar.svelte";
  import getNewItem from "./CanvasEditor/getNewItem";
  import getMouseData from "./CanvasEditor/getMouseData";
  import SelectItemMenu from "./CanvasEditor/SelectItemMenu.svelte";

  export let items;
  export let slideData;
  export let slideExtra;
  export let assets;
  export let showAddToolbar = true;
  
  export let itemObjects = [];
  let selectedItem = null;
  let interval = null;
  
  onMount(async () => {
      interval = setInterval(update, 20);
  });
  
  onDestroy(async () => {
      clearInterval(interval);
  });
  
  function addNewItem(newItemExtraFn) {
      const newItemExtra = newItemExtraFn();
      const newItem = getNewItem();
      newItem.itemExtra = newItemExtra;
      items.unshift(newItem);
      items = [...items];
  }
  
  function update() {
      console.log("update");
  }
  
  function updateItemObjects() {
      itemObjects = [];
      for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemObj = itemToObject(item, assets);
          if (itemObj) {
              itemObjects.push(itemObj);
          }
      }
  }
  
  $: {
      items;
      updateItemObjects();
  }
  
  function deleteSelectedItem() {
      if (selectedItem) {
          const index = items.findIndex(item => item.uuid === selectedItem.itemObject.itemData.uuid);
          if (index !== -1) {
              items.splice(index, 1);
              items = [...items];
              selectedItem = null;
          }
      }
  }
  
  function eventMouseDown(e, ctx) {
      if (selectedItem) {
          const {x, y} = getMouseData(e);
          selectedItem.mouseDown(x, y);
      }
  }
  
  function eventMouseMove(e, ctx) {
      if (selectedItem) {
          const {x, y} = getMouseData(e);
          selectedItem.mouseMove(x, y);
      }
  }
  
  function eventMouseUp () {
      if (selectedItem) {
          selectedItem.mouseUp();
      }
  }
  
  async function eventDblClick (e, ctx) {
      await checkHit(e, ctx);
  }
  
  async function checkHit (e, ctx) {
      const canvas = e.target;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      for (let i = 0; i < itemObjects.length; i++) {
          const itemObject = itemObjects[i];
          if (itemObject.isHit(x, y, ctx)) {
            setSelectedItem(itemObject)
              return;
          }
      }
      selectedItem = null;
  }
  
  function setSelectedItem(itemObject){    
    selectedItem = new SelectedItem(itemObject);
    selectedItem.setDeleteCallback(deleteSelectedItem);
  }
function setSelectedItemMenu(itemObjectIndex){
    // debugger;    
    selectedItem = new SelectedItem(itemObjects[itemObjectIndex]);
    selectedItem.setDeleteCallback(deleteSelectedItem);
  }



  function postDraw(ctx) {
      if (selectedItem !== null) {
          selectedItem.drawHandles(ctx);
      }
  }

  </script>
  
  {#if items}
      {#if showAddToolbar}
          <div class="flex justify-center w-full p-0 m-0">
              <AddToolbar icons={assets.icons} {addNewItem} />
          </div>
      {/if}

<div class="flex w-full p-0 m-0 bg-stone-900   text-white p-2 min-h-screen ">

        <div class='w-9/12'>
          <CanvasPlayer
              slideData={slideData}
              {items}
              slideExtra={slideExtra}
              {assets}
              {postDraw}
              {eventMouseDown}
              {eventMouseUp}
              {eventDblClick}
              {eventMouseMove}
          />
      </div>

      <div class='w-3/12 text-center '>
        <SelectItemMenu {itemObjects}  {selectedItem}  setSelectedItem={setSelectedItemMenu}/>
      </div>
</div>

{/if}

  
  
 