i have a very useful svelte component called SaveLoadToolbar.svelte

but this component is merged with the app . it is not independent such that i can be used in any svelte project. i have the component and 2 functions and 1 variable in the parent component.


Parent component has:

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

  and the component is imported as 


<SaveLoadToolbar {saveSlide} {importFile} bind:fileNameToSave={fileNameToSave}/>


and here is SaveLoadToolbar.svelte

<script>
    // export let createNewSlide;
    export let importFile;
    export let saveSlide;
    export let fileNameToSave;
  </script>
  
  <div class="flex p-0 m-0 bg-gray-900 text-white gap-2 py-1">
    <!-- <button class="text-[10px]" on:click={createNewSlide}>New 📰</button> -->
  
    <!-- Add file input button -->
    <label class="text-[10px] ml-2 cursor-pointer">
      Import 📂
      <input 
        type="file" 
        accept=".js"
        on:change={importFile}
        class="hidden"
      />
    </label>
    <button class="text-[10px]" on:click={saveSlide}>Save 💾</button>
    <input 
      class="text-[10px] p-0 text-white bg-gray-600 rounded-md text-center" 
      type="text" 
      bind:value={fileNameToSave} 
    />
  </div>
  
i want to make it an independent component that i can just import and use with no dependencies  