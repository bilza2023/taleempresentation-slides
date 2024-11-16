<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
//@ts-nocheck
import Toolbar from './editor/Toolbar.svelte';
import Titlebar from './editor/Titlebar.svelte';

import EqPart from './EqPart/EqPart.svelte';

import SP from './SPPart/SP.svelte';
import getNewItem from './getNewItem.js';
import { onMount } from 'svelte';
import {itemsStore} from "./store";

onMount(async () => {
    itemsStore.set(items);
    console.log("itemsStore" , $itemsStore);
});
////////////////////////////////////////////////////////
export let startTime=0;
export let endTime=10;
export let items=[];
export let currentTime=0;
////////////////////////////////////////////////////////
function redraw(){ items = [...items];}
function toggleSP(index){
//  debugger;
 items[index].extra.spVisibility = !items[index].extra.spVisibility; 
 items[index].extra.fsVisibility = false; 
  redraw();
}


function setEqType(i,typ) {
//  debugger;
  items[i].extra.type = typ;
 redraw();
}
function moveUpEq(index) {
  if (index > 0) {
    const eqToMove = items[index];
    items.splice(index, 1);
    items.splice(index - 1, 0, eqToMove);
  }
 redraw();
}
function moveDownEq(index) {
  if (index < items.length - 1) {
    const eqToMove = items[index];
    items.splice(index, 1);
    items.splice(index + 1, 0, eqToMove);
  }
  redraw();
}
function delEq(index) {
  items.splice(index, 1);
  redraw();
}
function openAllSP(){
  for (let i = 0; i < items.length; i++) {
    items[i].extra.spVisibility = true; 
  }
    redraw();
} 
function closeAllSP(){
  // debugger;
  for (let i = 0; i < items.length; i++) {
    items[i].extra.spVisibility = false; 
  }
    redraw();
}
function addEq(i) {
//  debugger;
   items.splice(i+1, 0, getNewItem());
  redraw();
}

function addFakeTimings(){
  // debugger;
const duration = 10;
let runningTime = startTime;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.extra.step = i;
    item.extra.startTime = runningTime;
    runningTime+=duration;
    item.extra.endTime = runningTime;
  }
 endTime = items[items.length-1].extra.endTime;
 items = [...items];
}
onMount(async ()=>{
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.extra.step = i;
  item.extra.fsVisibility = false;
  item.extra.spVisibility = false;
    if (!Array.isArray(item.extra.fs)){
    // debugger;
      item.extra.fs = [];
    }
}

});

</script>
<div class="bg-gray-800 w-full  text-white min-h-screen px-2 m-0">

<Toolbar  {addEq}  {closeAllSP} {openAllSP} {addFakeTimings}/>

<div class="w-full m-4 px-2">
   
  <Titlebar />

  {#each items as item, i}
    <EqPart  bind:item={item} {i} {currentTime} {addEq} {delEq} {moveUpEq} {moveDownEq} {setEqType}  {toggleSP}  />


    {#if item.extra.spVisibility}
    <SP clr="bg-yellow-900"  arrayName='Side Panel' bind:theArray={item.extra.sp}  {redraw} {i} />
    {/if}
       
  {/each}
</div>

<br>
<br>
<br>
<br>


</div>
