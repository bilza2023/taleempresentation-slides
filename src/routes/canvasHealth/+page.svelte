<script>
   import AppToolbar from "./AppToolbar.svelte";
  import {CanvasEditor}  from "$lib";
  import {onMount} from "svelte";
  import {Slide} from "../../lib/eqs/testData/baseEqSlide2";
  // import {slide as NewSlide} from "./slide.js";
  import loadAssets from "../assets/loadAssets";
  // import canvasHealth from "../../lib/canvas/canvasHealth/canvasHealth";
  import eqsHealth from "../../lib/eqs/eqsHealth";

  // import CanvasHealth from "../../lib/canvas/canvasHealth/CanvasHealth.svelte";
  let slide = null;
  let showAddToolbar = true;
  let assets = null;
  let report = null;
  
 

  onMount(async()=>{
    assets = await loadAssets(); 
    slide = Slide;
    // debugger;
    report  = await eqsHealth(slide);
    console.log("Report", report);
  });

</script>

<div class="w-full bg-gray-700 text-white py-2 px-4 min-h-screen ">
<!-- <CanvasHealth {report} /> -->
</div>