
Here are my 2 .js files.  SelectedItem object uses Handle object.

The problem
============
  The act method is suppose to trigger continuously on mouse-move but it does not why ???
 The Handle.selected fails to retain its state why ?
  act() {
    if(this.selected==true) {
      debugger;
      console.log('act');
    }
  }

i am also uploading the GrandParent (CanvasEditor.svelte) which uses SelectedItem object


