<script>
    //why import Editor directy ???? error -- 15-dec-2024
    import Editor  from "../../lib/presentation/editor/Editor.svelte";
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
    import {SlideObject} from '$lib';
    import SaveLoadToolbar from "../../lib/components/SaveLoadToolbar.svelte";
    
    let slides;
    let showToolbar=true;


  let fileNameToSave = 'presentation';

    function saveSlide(){
    const jsonString = `export const Slides = ${JSON.stringify(slides, null, 2)}`;
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileNameToSave}.js`;
    a.click();
    URL.revokeObjectURL(url);
  }
  async function importFile(event) {
    
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await file.text();
        // Remove any export/import statements and get the object
        const cleanedText = text.replace(/export\s+const\s+\w+\s*=\s*/, '');
        // Using Function constructor to safely evaluate the JS object
        const slideData = (new Function(`return ${cleanedText}`))();
        // debugger;
        // const slideData = JSON.parse(cleanedText);
        slides = slideData;
        // console.log("slide", slide);
      } catch (error) {
        console.error('Error loading JS file:', error);
        alert('Error loading file. Please ensure it is a valid JS file with a slide object.');
      }
    }
  }
onMount(async()=>{
      const s = SlideObject.Canvas.getDemoSlide();
      slides = [s];
});

</script>
  
<!-- <SaveLoadToolbar bind:slides /> -->
<SaveLoadToolbar 
  bind:content={slides} 
  fileName="presentation" 
  fileExtension="js"
  importAccept=".js"
  regexReplaceFilter={/export\s+const\s+\w+\s*=\s*/}
/>

  <div class="w-full bg-gray-800">
  


  {#if slides}
<!-- <SaveLoadDialogue bind:slides={slides} />   -->
<!-- src/lib/editor/slides.js -->
    <Editor
      isBlob={true}
      {showToolbar}
      {slides}
      {audioData}
    />
  
  {/if}
  
  </div>