<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
//@ts-nocheck
import TopToolbar from './TopToolbar.svelte';
import Row from './Row.svelte';
export let items;

</script>

<div class="bg-gray-800 w-full  text-white min-h-screen p-4 m-0 ">

  <TopToolbar />
  <!-- title bar -->
  <div class="flex w-full bg-stone-700  justify-center text-lg rounded-md  ">
    <!-- <div class="w-1/12  text-center">Step</div> -->
    <div class="w-1/12  text-center">Start Time</div>
    <div class="w-6/12  text-center">Editor</div>
    <div class="w-4/12  text-center">Display</div>
    <div class="w-1/12  text-center">Side Panel</div>
</div>
<!-- title bar Ends -->


<!-- Rows -->

  <div class="flex flex-col gap-2 my-1 p-1 ">
    {#each items  as item, i}
    <Row   {i} bind:item={item} />
    {/each}
  </div>
    

  <!-- oage end -->
</div>
