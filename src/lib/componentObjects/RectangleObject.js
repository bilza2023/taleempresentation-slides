//@ts-nocheck
import ComponentObject from './ComponentObject';
import getVal from "../getVal";

export default class RectangleObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

////////////////////////////////////////////////////
draw(ctx, currentTime) {
  // Save the current context state
  ctx.save();
// debugger;
  // Extract values
  const x = getVal(currentTime, this.x);
  const y = getVal(currentTime, this.y);
  const width = getVal(currentTime, this.width);
  const height = getVal(currentTime, this.height);
  const color = getVal(currentTime, this.itemData.itemExtra.color) || 'white';
  const filled = getVal(currentTime, this.itemData.itemExtra.filled) || true;
  const dash = getVal(currentTime, this.itemData.itemExtra.dash) || 0;
  const gap = getVal(currentTime, this.itemData.itemExtra.gap) || 0;
  const lineWidth = getVal(currentTime, this.itemData.itemExtra.lineWidth) || 1;
  const globalAlpha = getVal(currentTime, this.itemData.itemExtra.globalAlpha) || 1;

  // Set properties
  ctx.lineWidth = lineWidth;
  ctx.globalAlpha = globalAlpha;

  // Set line dash pattern
  if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
  } else {
      ctx.setLineDash([dash, gap]);
  }

  if (filled) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
  } else {
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y, width, height);
  }

  // Restore the context state
  ctx.restore();
}



}//class
