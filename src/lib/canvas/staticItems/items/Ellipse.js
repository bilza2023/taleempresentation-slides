import  uuid  from '../../../uuid';

// remove item in draw
export default class Ellipse {
  
  static data() { 
    return {
        uuid: uuid(),
        type: 'ellipse',
        x: 100,
        y: 100,
        radiusX: 50,
        radiusY: 75,
        rotation: 0,
        startAngle: 0,
        endAngle: 360,
        lineWidth: 1,
        fill: false,
        color: "red",
        globalAlpha: 1
    };
  }

  
  static draw(ctx, itemExtra) {
      // Save the current context state
      ctx.save();

      // Extract values
      const x = itemExtra.x;
      const y = itemExtra.y;
      const radiusX = itemExtra.radiusX;
      const radiusY = itemExtra.radiusY;
      const color = itemExtra.color || 'black';
      const fill = itemExtra.fill || false;
      const rotation = (itemExtra.rotation) || 0 * (Math.PI / 180);
      const startAngle = (itemExtra.startAngle) || 0 * (Math.PI / 180);
      const endAngle = (itemExtra.endAngle) || 360 * (Math.PI / 180);
      const lineWidth = itemExtra.lineWidth || 1;
      const dash = itemExtra.dash || 0;
      const gap = itemExtra.gap || 0;
      const globalAlpha = itemExtra.globalAlpha || 1;
  
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
}