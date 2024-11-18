<script>
    //@ts-nocheck
   import Toolbar from "./ToolBar.svelte";
   export let item;
</script>

<Toolbar  {item}  />

<div class="bg-green-800 p-2 m-2 rounded-md">
    {#each item.itemExtra.sp as sp, j}
        {sp.code}
    {/each}
</div>