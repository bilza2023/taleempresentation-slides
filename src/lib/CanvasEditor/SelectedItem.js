


export default class SelectedItem{

    constructor(){
        this.selectedItemIndex = null;
    }

    async checkHit(e,itemObjects) {
            const canvas = e.target; // assuming e.target is the canvas
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
        
            for (let i = 0; i < itemObjects.length; i++) {
                const itemObject = itemObjects[i];
                if (itemObject.isHit(x,y)){
                    this.selectedItemIndex = i;
                    return true;
                }
            }
            this.selectedItemIndex = null; 
            return false;
        }

     
    drawHandles(ctx,itemObjects){
        if( this.selectedItemIndex == null){return;}

        // const itemObject = itemObjects[this.selectedItemIndex];
        ctx.fillStyle = 'red';
        ctx.font = '60px Arial';
        ctx.textBaseline = 'top';
        ctx.globalAlpha = 1;
      
        // Draw the text
        ctx.fillText("This is a Warning..!", 100, 100);

    }    

}