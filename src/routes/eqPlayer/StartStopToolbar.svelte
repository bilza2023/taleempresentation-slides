<script>
    export let currentTime;
    export let start;
    export let stop;


  </script>
  
  <div class="flex p-0 m-0 bg-gray-900 text-white gap-2 py-1">
    
    <button class="text-[10px] rounded-md bg-stone-400 px-2" on:click={start}>Start</button>
    <button class="text-[10px] rounded-md bg-stone-400 px-2" on:click={stop}>Stop</button>

    <div class="text-xs">Current Time : {currentTime}</div>
  </div>
  