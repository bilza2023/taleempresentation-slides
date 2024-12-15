<script>
  // Props with default values
  export let slides = []; // The data to be saved/loaded
  export let fileName = 'presentation';
  export let fileExtension = 'js';
  export let importAccept = '.js';

  // Function to save slides
  function saveSlide() {
    const jsonString = `export const Slides = ${JSON.stringify(slides, null, 2)}`;
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.${fileExtension}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Function to import slides
  async function importFile(event) {
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await file.text();
        // Remove any export/import statements and get the object
        const cleanedText = text.replace(/export\s+const\s+\w+\s*=\s*/, '');
        // Using Function constructor to safely evaluate the JS object
        const slideData = (new Function(`return ${cleanedText}`))();
        // Update the slides
        slides = slideData;
      } catch (error) {
        console.error('Error loading JS file:', error);
        alert('Error loading file. Please ensure it is a valid JS file with a slide object.');
      }
    }
  }
</script>

<div class="flex p-0 m-0 bg-gray-900 text-white gap-2 py-1">
  <!-- Import file button -->
  <label class="text-[10px] ml-2 cursor-pointer">
    Import 📂
    <input 
      type="file" 
      accept={importAccept}
      on:change={importFile}
      class="hidden"
    />
  </label>

  <!-- Save button -->
  <button class="text-[10px]" on:click={saveSlide}>Save 💾</button>

  <!-- Filename input -->
  <input 
    class="text-[10px] p-0 text-white bg-gray-600 rounded-md text-center" 
    type="text" 
    bind:value={fileName} 
  />
</div>