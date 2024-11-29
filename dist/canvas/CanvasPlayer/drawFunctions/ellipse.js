


export default function ellipse(ctx,item){
      // Save the current context state
      ctx.save();
// This is a line that uses ctx from store just keep it here for later use      
        // get(ctxStore).fillRect(0, 0, 100, 100);

      // Extract values
      const x = item.itemExtra.x;
      const y = item.itemExtra.y;
      const radiusX = item.itemExtra.radiusX;
      const radiusY = item.itemExtra.radiusY;
      const color = item.itemExtra.color || 'black';
      const fill = item.itemExtra.fill || false;
      const rotation = (item.itemExtra.rotation) || 0 * (Math.PI / 180);
      const startAngle = (item.itemExtra.startAngle) || 0 * (Math.PI / 180);
      const endAngle = (item.itemExtra.endAngle) || 360 * (Math.PI / 180);
      const lineWidth = item.itemExtra.lineWidth || 1;
      const dash = item.itemExtra.dash || 0;
      const gap = item.itemExtra.gap || 0;
      const globalAlpha = item.itemExtra.globalAlpha || 1;
  
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