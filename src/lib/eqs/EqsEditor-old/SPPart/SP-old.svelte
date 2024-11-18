<script>
    //@ts-nocheck
    import {itemsStore} from "../store";
    import CodeTxt from './CodeTxt.svelte';
    import VerticalBtns from './VerticalBtns.svelte';
    import Table from './Table.svelte';
    import TableCode from './TableCode.svelte';
    
    export let i;
$:{
    $itemsStore;
    console.log("itemsStore" , $itemsStore);
}    

    function moveUp(j) {
      if (j <= 0) return;
      
      const spToMove = $itemsStore[i].itemExtra.sp[j];
      $itemsStore[i].itemExtra.sp.splice(j, 1);
      $itemsStore[i].itemExtra.sp.splice(j - 1, 0, spToMove);
   
    }
    
    function moveDown(j) {
      if (j == $itemsStore[i].itemExtra.sp.length - 1) return;
      
      const spToMove = $itemsStore[i].itemExtra.sp[j];
      $itemsStore[i].itemExtra.sp.splice(j, 1);
      $itemsStore[i].itemExtra.sp.splice(j + 1, 0, spToMove);
   
    }
    
    function del(j) {
      $itemsStore[i].itemExtra.sp.splice(j, 1);
   
    }
    
    function updateTableData(j, data) {
      $itemsStore[i].itemExtra.sp[j].code = data;
    }
    </script>
    
    <div id={`eqPart`} class={`w-full bg-yellow-900 text-center rounded-md justify-center p-2`}>
      
        {#each $itemsStore[i].itemExtra.sp as sp, j}

        {#if (sp.type == 'code')}
          <div class="flex justify-center bg-stone-600 rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
            <textarea class="bg-stone-900 rounded-md w-5/12 mx-auto"
              bind:value={sp.code}></textarea>
            <div class="bg-stone-900 rounded-md w-5/12 mx-auto">
              <CodeTxt eq={sp}/>
            </div>
            <div class='w-2/12'>
              <VerticalBtns {moveUp} {moveDown} {del} {j}/>
            </div>
          </div>
        {/if}
    
        <!-- {#if (sp.type == 'text' || sp.type == 'txt')}
          <div class="flex justify-center rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
            <textarea class="bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}></textarea>
            <div class='w-2/12'>
              <VerticalBtns {moveUp} {moveDown} {del} {j}/>
            </div>
          </div>
        {/if} -->
<!--     
        {#if (sp.type == 'heading' || sp.type == 'hdg')}
          <div class="flex justify-center rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
            <input class="bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code} />
            <div class='w-2/12'>
              <VerticalBtns {moveUp} {moveDown} {del} {j}/>
            </div>
          </div>
        {/if} -->
    
        <!-- {#if (sp.type == 'img' || sp.type == 'image')}
          <div class="flex justify-center rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
            <input type="text" class="bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}/>
            <div class='w-2/12'>
              <VerticalBtns {moveUp} {moveDown} {del} {j}/>
            </div>
          </div>
        {/if} -->
    
        <!-- {#if (sp.type == 'table' || sp.type == 'tbl')}
          <div class="flex justify-center rounded-md w-full mx-auto mb-4 mt-2 gap-1">
            <Table bind:item={sp.code} {moveUp} {moveDown} {del} {j}/>
          </div>
        {/if}
    
        {#if (sp.type == 'tableCode')}
          <TableCode bind:item={sp.code} {moveUp} {moveDown} {del} {redraw} {j}/>
        {/if} -->
      {/each}
    </div>