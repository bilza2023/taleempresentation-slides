//@ts-nocheck
import ItemObject from './ItemObject';

export default class ImageObject extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
        if (this.itemData.itemExtra.src ==null || this.itemData.itemExtra.image == null){
            this.itemData.itemExtra.src = '/system_images/gen/wood.jpg'; 
        }
        this.loadImage();        
    }
    loadImage() {
        const img = new Image();
        img.src = this.itemData.itemExtra.src;
    
        img.onload = () => {
            this.itemData.itemExtra.image = img;
        };
    
        img.onerror = () => {
            console.error(`Image failed to load: ${this.itemData.itemExtra.src}`);
        };
    }

///////////////////////////////////////////////////
draw(ctx){ 
    // debugger;
    if (!this.itemData.itemExtra.image  || this.itemData.itemExtra.image == null) {return;} 
   
   ctx.save(); // Save the current context state
   ctx.globalAlpha =   this.itemData.itemExtra.globalAlpha; // Set the global alpha
   ctx.drawImage(this.itemData.itemExtra.image, this.itemData.itemExtra.x, this.itemData.itemExtra.y, this.itemData.itemExtra.width, this.itemData.itemExtra.height);
   ctx.restore();     
}
////////////////////////////////////////////////////


///////////////////////////////////////////////////
    
}//class
