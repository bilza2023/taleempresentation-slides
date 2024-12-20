<script>
    export let slide;
    export let currentTime;
    export let start;
    export let stop;
    export let startTime;
    export let endTime;

    
    function log(){
        localStorage.setItem("slide",JSON.stringify(slide) );
        alert("Printed to console");
    }

  </script>
  
  <div class="flex p-0 m-0 bg-gray-900 text-white gap-2 py-1">
    
    <button class="text-[10px] rounded-md bg-stone-400 px-2" on:click={start}>Start</button>
    <button class="text-[10px] rounded-md bg-stone-400 px-2" on:click={stop}>Stop</button>
    <button class="text-[10px] rounded-md bg-stone-400 px-2" on:click={log}>{slide}</button>

    <div class="text-[10px] rounded-md bg-stone-400 px-2">Current Time : {currentTime}</div>
    <div class="text-[10px] rounded-md bg-stone-400 px-2">Slide Start Time : {slide.startTime}</div>
    <div class="text-[10px] rounded-md bg-stone-400 px-2">Slide End Time : {slide.endTime}</div>
  </div>
  