import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Triangle {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'triangle',
      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,
      lineWidth: 2,
      filled: false,
      color: "red",
      globalAlpha: 1
    };
  }

  
  static draw(ctx, itemExtra) {
    ctx.save();
    
    // Extract values
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const x3 = itemExtra.x3;
    const y3 = itemExtra.y3;
    const color = itemExtra.color || 'black';
    const filled = itemExtra.filled || true;
    const lineWidth = itemExtra.lineWidth || 2;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;

    // Set properties
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.strokeStyle = color;

    // Set line dash pattern
    if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
    } else {
        ctx.setLineDash([dash, gap]);
    }

    // Draw filled or outlined triangle
    if (filled) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
    }

    // Restore the context state
    ctx.restore();
  }
}