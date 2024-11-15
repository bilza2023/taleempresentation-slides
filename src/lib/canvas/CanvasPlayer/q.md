check this svelte component (CanvasPlayer) and answer my questions.
CanvasPlayer draw components/items on html5 canvas

1: The main data is in items and then that is converted in itemObjects. Actually the player needs itemObjects and not the items. should we simply remove the items and just leave "itemObjects" Also the CanvasPlayer is resposible for drawing and should not be responible for updateItemObjects.

2: i will also upload the parent component CanvasEditor.svelte. since we need to move the updateItemObjects there .

3: check "drawLib" i think it is not being used much so we can try to remove this will simplify the code.

4: check the code and see if there is some confusion or erros and give code-review.

5: read the docs above and see if this does what it is made to do 