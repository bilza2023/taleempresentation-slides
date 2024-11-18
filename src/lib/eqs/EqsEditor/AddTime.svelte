
<script>
    //@ts-nocheck
    export let item;
    export let currentTime;
    
function addTime(){
// remove this line later    
item.itemExtra.startTime = currentTime;
//lets also add showAt which is more in line with the app (we use showAt for display-selected) 
item.showAt = currentTime; // remember showAt is not in itemExtra
}
</script>


<div  class="flex flex-col w-full bg-stone-700  p-0 m-0 rounded-md" >
    <input bind:value={item.itemExtra.startTime} class="text-xs bg-gray-800 text-white"/>
    <div>{item.itemExtra.startTime}</div>
    <button class='bg-orange-800 text-xs p-0 m-1 rounded-md' on:click={addTime}>Set Time</button>
</div>
  