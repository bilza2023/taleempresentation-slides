 //@ts-nocheck
import ItemObject from './ItemObject';
// import { ctxStore } from '../store';
// import { get } from 'svelte/store';

export default class EllipseObject extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
    }

    draw(ctx) {
      // Save the current context state
      ctx.save();
// This is a line that uses ctx from store just keep it here for later use      
        // get(ctxStore).fillRect(0, 0, 100, 100);

      // Extract values
      const x = this.itemData.itemExtra.x;
      const y = this.itemData.itemExtra.y;
      const radiusX = this.itemData.itemExtra.radiusX;
      const radiusY = this.itemData.itemExtra.radiusY;
      const color = this.itemData.itemExtra.color || 'black';
      const fill = this.itemData.itemExtra.fill || false;
      const rotation = (this.itemData.itemExtra.rotation) || 0 * (Math.PI / 180);
      const startAngle = (this.itemData.itemExtra.startAngle) || 0 * (Math.PI / 180);
      const endAngle = (this.itemData.itemExtra.endAngle) || 360 * (Math.PI / 180);
      const lineWidth = this.itemData.itemExtra.lineWidth || 1;
      const dash = this.itemData.itemExtra.dash || 0;
      const gap = this.itemData.itemExtra.gap || 0;
      const globalAlpha = this.itemData.itemExtra.globalAlpha || 1;
  
      // Set properties
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = globalAlpha;
      ctx.beginPath();
      ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
  
      if (fill) {
          ctx.fillStyle = color;
          ctx.fill();
      } else {
          ctx.strokeStyle = color;
  
          // Set line dash pattern
          if (dash === 0 && gap === 0) {
              ctx.setLineDash([]);
          } else {
              ctx.setLineDash([dash, gap]);
          }
  
          ctx.stroke();
      }
  
      // Restore the context state
      ctx.restore();
  }
  
    ////////////////////////////////////////////////////
    boundingRectangleX() {
        return this.itemData.itemExtra.x - this.itemData.itemExtra.radiusX;
    }
    boundingRectangleY() {
        return this.itemData.itemExtra.y - this.itemData.itemExtra.radiusY;
    }
     get width() {
        return this.itemData.itemExtra.radiusX * 2;
    }
    set width(newWidth) {
        this.itemData.itemExtra.radiusX = newWidth/2;
    }
    get height() {
        return this.itemData.itemExtra.radiusY * 2;
    }
    set height(newHeight) {
        this.itemData.itemExtra.radiusY = newHeight/2;
    }
  

    
}//class
