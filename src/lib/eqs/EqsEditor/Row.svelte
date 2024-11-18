<script>
  import SidePanel from "./SidePanel/SidePanel.svelte";

    export let item;
    export let i;
   
    let open = false;
   
    // Compute if there are items in the sp array
    $: hasItems = item?.itemExtra?.sp?.length > 0;
   </script>
   
   <div class="flex w-full  justify-center text-lg rounded-md gap-2">
    <span class="rounded-lg bg-stone-700 text-white text-md p-1">{i+1}</span> 
   
    
    <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">Start Time</div>
    <div class="w-6/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">Editor</div>
    <div class="w-4/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">Display</div>
    <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">
           <button 
               class="p-1 rounded-md m-1 {hasItems ? 'bg-green-600' : 'bg-gray-400'}" 
               on:click={() => open = !open}
           > 
               Side Panel
           </button>
       </div>
   </div>
   
   {#if open}
   <SidePanel bind:item={item} />
   {/if}