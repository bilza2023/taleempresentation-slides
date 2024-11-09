//@ts-nocheck
import ItemObject from './ItemObject';

export default class Circle extends ItemObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
}

    draw(ctx, currentTime) {
      // Save the current context state
      ctx.save();
  
      // Extract values
      const x = this.itemData.itemExtra.x;
      const y = this.itemData.itemExtra.y;
      const radius = this.itemData.itemExtra.radius;
      const color = this.itemData.itemExtra.color || 'black';
      const fill = this.itemData.itemExtra.fill || false;
      const startAngle = (this.itemData.itemExtra.startAngle) || 0 * (Math.PI / 180);
      const endAngle = (this.itemData.itemExtra.endAngle || 360) * (Math.PI / 180);
      const dash = this.itemData.itemExtra.dash || 0;
      const gap = this.itemData.itemExtra.gap || 0;
      const lineWidth = this.itemData.itemExtra.lineWidth || 1;
      const globalAlpha = this.itemData.itemExtra.globalAlpha || 1;
  
      // Set properties
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = globalAlpha;
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
  
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
  
////////////////////////////////////////////////////////////////////
width(){
    return this.itemData.itemExtra.radius * 2;
 }
 height(){
    return this.itemData.itemExtra.radius * 2;
 }
 getX(){
    return this.itemData.itemExtra.x;
 }
 
 getY(){
    return this.itemData.itemExtra.y;
 }
////////////////////////////////////////////////////////////////////
isHit(mouseX, mouseY) {
    const centerX = this.getX();
    const centerY = this.getY();
    const radius = this.itemData.itemExtra.radius;

    // Calculate the distance between the mouse click and the center of the circle
    const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );

    // Check if the distance is less than or equal to the radius
    return distance <= radius;
}
}//class
