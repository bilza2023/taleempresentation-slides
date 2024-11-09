THE MISSION:
======================================================================    
I want your help to solve the problem of creating User-interface components (handles) to be drawn on html5 canvas using which i can edit (scale,rotate,delete et) items on canvas.

    - in my javascript app i draw items in html5 canvas
    - each of these items can be 1: selected and 2: edited. 
    - Once an item is selected it display these User-interface components (handles). and we can edit the item using these for example move-x move-y increase width and height.

======================================================================    


MY PRESENT SOLUTION:
======================================================================    
 1: CanvasEditorPlayer creates a selectedItem on double-click
 2: SelectedItem : 1: drawHandles 2: findout which handle is clicked and set flags 3: on mouse move act accoring to the flag set.
 3: in CanvasEditorPlayer the --> export let items; this is the items data. when we slect one out of it we convert it into itemObjects which is an object which takes in the "itemData" and have methods around it.  WRITE ME A SOLUTION WHICH USES "itemObjects" since my entire app uses it.
 4: I am also using EditButton.js which represents each handle.

CanvasEditorPlayer.svelte
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
import AddToolbar from "./AddToolbar.svelte";
import getNewItem from "./getNewItem";
import getMouseData from "./getMouseData";
import uuid from "./uuid";

  export let currentTime = 0; // pulse ???
  export let items; // items are currentSlide.items (it should just be slide)
  export let slideData; // items are currentSlide.items (it should just be slide)
  export let slideExtra;   //this should be slideExtra not to be confused with item.slideExtra
  export let assets;
  export let showAddToolbar=true;

  export let itemObjects = []; // Can be passed directly in editor mode

  let selectedItem = null;
  let interval=null;

  onMount(async () => {
    interval = setInterval(update, 20);  
  });

  onDestroy(async () => {
    clearInterval(interval); 
  });
  //The toolbar just give item.itemExtra we have to get a generic item
  function addNewItem(newItemExtraFn) {

  const newItemExtra = newItemExtraFn();
  const newItem = getNewItem(); // get an item for which we already have item.itemExtra
  newItem.itemExtra = newItemExtra;    
  items.unshift(newItem);      
  items =  [...items];

}
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
        // console.log("itemObjects",itemObjects);
  }
  $: {
    items;
    updateItemObjects();
  }
  
async function eventClick(e,ctx){
  
  
}

function postDraw(ctx){
  if(selectedItem !== null){
    selectedItem.drawHandles(ctx,itemObjects);
  }
}

function clone(){
  // debugger;
  const clonedItem = JSON.parse(JSON.stringify(selectedItem.itemObject.itemData));
  clonedItem.itemExtra.x.initialValue +=10;
  clonedItem.itemExtra.y.initialValue +=10;
  clonedItem._id = null;
  clonedItem.uuid = uuid();
  items = [...items, clonedItem];
  console.log("cloned");
}
function eventMouseDown(e,ctx){

  if(selectedItem !== null){
    // debugger;
    const {x,y} = getMouseData(e);
  const r = selectedItem.isHit(x,y);
  console.log("r",r);
  }
}

function eventMouseMove(e,ctx){
  if(selectedItem !== null){
  selectedItem.mouseMove(e,ctx,itemObjects);
  }
}

function eventMouseUp(){
  if(selectedItem !== null){
  selectedItem.mouseUp( );
  }
}

async function eventDblClick(e,ctx){
   await  checkHit(e,ctx);
  //  console.log("selectedItem",selectedItem);
}

async function checkHit(e,ctx) {
            const canvas = e.target; // assuming e.target is the canvas
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
        
            for (let i = 0; i < itemObjects.length; i++) {
                const itemObject = itemObjects[i];
                if (itemObject.isHit(x,y,ctx)){
                  selectedItem = new SelectedItem(itemObject);
                  selectedItem.clone = clone;
                  return; // important
                }
            }
            selectedItem =  null;
}
</script>



{#if items}
{#if showAddToolbar}
<div class="flex justify-center w-full p-0 m-0">
  <AddToolbar icons={assets.icons} {addNewItem} />
</div>
{/if}
<div class='p-0 m-0 bg-stone-900'>
  
    <CanvasPlayer   
    {currentTime}
    slideData={slideData} 
    {items}        
    slideExtra={slideExtra} 
    {assets}
    eventClick={eventClick}
    {postDraw}
    {eventMouseDown}
    {eventMouseUp}
    {eventDblClick}
    {eventMouseMove}
    />
    
</div>
{/if}


SelectedItems.js
import EditButton from "./EditButton";
import getMouseData from "./getMouseData";

export default class SelectedItem{

constructor(itemObject){

    this.itemObject = itemObject;

    this.handleWidth = 15;
    this.handleHeight = 15;
    this.handleColor ='red';
    this.isDrag = false;
    this.selectedHandle = null;

    this.clone = ()=>{};

    //moveXYbutton
    this.moveXYbutton = new EditButton(itemObject);
    this.moveXYbutton.icon = '🧷';
    
    //scaleXButton
    this.scaleXButton = new EditButton(itemObject);
    this.scaleXButton.color = 'blue';
    this.scaleXButton.offsetX  = -15;  
    this.scaleXButton.icon = '🛶';
    
    //scaleYButton
    this.scaleYButton = new EditButton(itemObject);
    this.scaleYButton.color = 'green';
    this.scaleYButton.offsetX  = -15;  
    this.scaleYButton.offsetY  = +15;  
    this.scaleYButton.icon = '🐪';
    
    
    //cloneButton
    this.cloneButton = new EditButton(itemObject);
    this.cloneButton.color = 'pink';
    this.cloneButton.offsetX  = -15;  
    this.cloneButton.offsetY  = +30;  
    this.cloneButton.icon = '🐑';
    
    //copyButton
    this.copyButton = new EditButton(itemObject);
    this.copyButton.color = 'brown';
    this.copyButton.offsetX  = -15;  
    this.copyButton.offsetY  = +45;  
    this.copyButton.icon = '📋';
    
    //deleteButton
    this.deleteButton = new EditButton(itemObject);
    this.deleteButton.color = 'red';
    this.deleteButton.offsetX  = -15;  
    this.deleteButton.offsetY  = +60;  
    this.deleteButton.icon = '🗑️';


}

drawHandles(ctx){
  // Draw toolbar buttons
  this.moveXYbutton.drawButton(ctx);
  this.scaleXButton.drawButton(ctx);
  this.scaleYButton.drawButton(ctx);
  this.cloneButton.drawButton (ctx);
  this.copyButton.drawButton (ctx);
  this.deleteButton.drawButton (ctx);
      
}

// eslint-disable-next-line no-unused-vars
mouseMove(e, ctx) {
  const {x,y} = getMouseData(e);

  if (this.selectedHandle == null) return;

  if (this.selectedHandle == "moveXY"){
    this.itemObject.itemData.itemExtra.x.initialValue = (x);
    this.itemObject.itemData.itemExtra.y.initialValue = (y);
  }

if (this.selectedHandle === "scaleX") {
  this.itemObject.itemData.itemExtra.width.initialValue +=5;
}
if (this.selectedHandle === "scaleY") {
  this.itemObject.itemData.itemExtra.height.initialValue +=5;
}
if (this.selectedHandle === "clone") {
    // Handle cloning
}
if (this.selectedHandle === "copy") {
    // Handle copying
}
if (this.selectedHandle === "delete") {
    // Handle deletion
}
 
}

mouseUp(){
  this.selectedHandle = null;
  this.isDrag = false;
}

isHit(x, y) {
  // debugger;
  // Check moveXY button
  const isMoveXYhit = this.moveXYbutton.isHit(x, y);
  if (isMoveXYhit) {
      this.selectedHandle = "moveXY";
      return "moveXY";
  }

  // Check scaleX button
  const isScaleXhit = this.scaleXButton.isHit(x, y);
  if (isScaleXhit) {
      this.selectedHandle = "scaleX";
      return "scaleX";
  }

  // Check scaleY button
  const isScaleYhit = this.scaleYButton.isHit(x, y);
  if (isScaleYhit) {
      this.selectedHandle = "scaleY";
      return "scaleY";
  }

  // Check clone button
  const isClonehit = this.cloneButton.isHit(x, y);
  if (isClonehit) {
      this.selectedHandle = "clone";
      this.clone();
      return "clone";
  }

  // Check copy button
  const isCopyhit = this.copyButton.isHit(x, y);
  if (isCopyhit) {
      this.selectedHandle = "copy";
      return "copy";
  }

  // Check delete button
  const isDeletehit = this.deleteButton.isHit(x, y);
  if (isDeletehit) {
      this.selectedHandle = "delete";
      return "delete";
  }

  // If no button was hit, return null
  return null;
}


}
EditButton.js


export default class EditButton {

constructor(itemObject){

    this.itemObject = itemObject;

    this.flag = "";
    this.icon = "🎸";

    this.offsetX = 0;
    this.offsetY = 0;

    this.color = 'yellow';
    this.buttonSize = 15;

}
getX(){
    return this.itemObject.getX() + this.offsetX;
}
getY(){
    return this.itemObject.getY() + this.offsetY;
}
drawButton(ctx) {
    // Draw the button background
    ctx.globalAlpha = 1;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.getX(), this.getY(), this.buttonSize, this.buttonSize);
    
    // Add text
    ctx.fillStyle = "black";  // Text color
    ctx.font = `${this.buttonSize * 0.6}px Arial`;  // Font size relative to button size
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Draw the text in the center
    const x = this.getX() + (this.buttonSize / 2);  // Center X
    const y = this.getY() + (this.buttonSize / 2);  // Center Y
    ctx.fillText(this.icon, x, y);
}
    
isHit(x, y) {

    return (
      x >= this.getX()  &&
      x <= this.getX()  + this.buttonSize &&
      y >= this.getY()  &&
      y <= this.getY()  + this.buttonSize
    );
}

  





}

ComponentObject.js (Base class for itemObjects)
//@ts-nocheck

export default class ComponentObject {
   constructor(itemData) {
       this.itemData = itemData;
   }
   isVisible(currentTime) {
       if (!this.itemData.itemExtra.showAt) {
           return true;
       } else {
           return currentTime >= this.itemData.itemExtra.showAt;
       }
   }

   // eslint-disable-next-line no-unused-vars
   draw(ctx , currentTime=0){
      console.log("ComponentObject draw");
   }

  get width() {
       return this.itemData.itemExtra.width.initialValue;
   }
  set width(newWidth) {
       this.itemData.itemExtra.width.initialValue = newWidth;
   }

   get height() {
       return this.itemData.itemExtra.height.initialValue;
   }
   set height(newHeight) {
       this.itemData.itemExtra.height.initialValue = newHeight;
   }

   getX() {
       return this.itemData.itemExtra.x.initialValue;
   }
   get x() {
       return this.itemData.itemExtra.x.initialValue;
   }
   set x(newX) {
       this.itemData.itemExtra.x.initialValue=newX;
   }
   get y() {
       return this.itemData.itemExtra.y.initialValue;
   }
   set y(newY) {
       this.itemData.itemExtra.y.initialValue=newY;
   }

   getY() {
       return this.itemData.itemExtra.y.initialValue;
   }

   isHit(mouseX, mouseY) {
       return (
           mouseX >= this.getX() &&
           mouseX <= this.getX() + this.width() &&
           mouseY >= this.getY() &&
           mouseY <= this.getY() + this.height()
       );
   }
//////////////////////////////////////////////////////////////////////
 
   get command() {
     return this.itemData.itemExtra.command;
   }
   set command(value) {
     this.itemData.itemExtra.command = value;
   }
 
   // Getter and setter for 'name' property
   get name() {
     return this.itemData.itemExtra.name;
   }
   set name(value) {
     this.itemData.itemExtra.name = value;
   }
 
   // Getter and setter for 'color' property
   get color() {
     return this.itemData.itemExtra.color;
   }
   set color(value) {
     this.itemData.itemExtra.color = value;
   }
 
   // Getter and setter for 'showAt' property
   get showAt() {
     return this.itemData.itemExtra.showAt;
   }
   set showAt(value) {
     this.itemData.itemExtra.showAt = value;
   }
 
   // Getter and setter for 'globalAlpha' property
   get globalAlpha() {
     return this.itemData.itemExtra.globalAlpha;
   }
   set globalAlpha(value) {
     this.itemData.itemExtra.globalAlpha = value;
   }
 
   // Getter and setter for 'gap' property
   get gap() {
     return this.itemData.itemExtra.gap;
   }
   set gap(value) {
     this.itemData.itemExtra.gap = value;
   }
 
   // Getter and setter for 'dash' property
   get dash() {
     return this.itemData.itemExtra.dash;
   }
   set dash(value) {
     this.itemData.itemExtra.dash = value;
   }
 
   // Getter and setter for 'shadowOffsetX' property
   get shadowOffsetX() {
     return this.itemData.itemExtra.shadowOffsetX;
   }
   set shadowOffsetX(value) {
     this.itemData.itemExtra.shadowOffsetX = value;
   }
 
   // Getter and setter for 'shadowOffsetY' property
   get shadowOffsetY() {
     return this.itemData.itemExtra.shadowOffsetY;
   }
   set shadowOffsetY(value) {
     this.itemData.itemExtra.shadowOffsetY = value;
   }
 
   // Getter and setter for 'shadowColor' property
   get shadowColor() {
     return this.itemData.itemExtra.shadowColor;
   }
   set shadowColor(value) {
     this.itemData.itemExtra.shadowColor = value;
   }
 
   // Getter and setter for 'shadowBlur' property
   get shadowBlur() {
     return this.itemData.itemExtra.shadowBlur;
   }
   set shadowBlur(value) {
     this.itemData.itemExtra.shadowBlur = value;
   }   
//////////////////////////////////////////////////////////////////////   
}

itesm extend the base class ComponentObject

// example RectangleObject.js
//@ts-nocheck
import ComponentObject from './ComponentObject';
import getVal from "../getVal";

export default class RectangleObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

////////////////////////////////////////////////////
draw(ctx, currentTime) {
  // Save the current context state
  ctx.save();

  // Extract values
  const x = getVal(currentTime, this.itemData.itemExtra.x);
  const y = getVal(currentTime, this.itemData.itemExtra.y);
  const width = getVal(currentTime, this.itemData.itemExtra.width);
  const height = getVal(currentTime, this.itemData.itemExtra.height);
  const color = getVal(currentTime, this.itemData.itemExtra.color) || 'white';
  const filled = getVal(currentTime, this.itemData.itemExtra.filled) || true;
  const dash = getVal(currentTime, this.itemData.itemExtra.dash) || 0;
  const gap = getVal(currentTime, this.itemData.itemExtra.gap) || 0;
  const lineWidth = getVal(currentTime, this.itemData.itemExtra.lineWidth) || 1;
  const globalAlpha = getVal(currentTime, this.itemData.itemExtra.globalAlpha) || 1;

  // Set properties
  ctx.lineWidth = lineWidth;
  ctx.globalAlpha = globalAlpha;

  // Set line dash pattern
  if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
  } else {
      ctx.setLineDash([dash, gap]);
  }

  if (filled) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
  } else {
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y, width, height);
  }

  // Restore the context state
  ctx.restore();
}

width(){
    return this.itemData.itemExtra.width.initialValue;
 }
 height(){
    return this.itemData.itemExtra.height.initialValue;
 }
 getX(){
    return this.itemData.itemExtra.x.initialValue;
 }
 
 getY(){
    return this.itemData.itemExtra.y.initialValue;
 }

 getLeft() {
    return Math.min(this.getX(), this.getX() + this.width());
}

getRight() {
    return Math.max(this.getX(), this.getX() + this.width());
}

getTop() {
    return Math.min(this.getY(), this.getY() + this.height());
}

getBottom() {
    return Math.max(this.getY(), this.getY() + this.height());
}

isHit(mouseX, mouseY) {
    return (
        mouseX >= this.getLeft() &&
        mouseX <= this.getRight() &&
        mouseY >= this.getTop() &&
        mouseY <= this.getBottom()
    );
}
    
}//class



