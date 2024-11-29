


export default function circle(ctx,item){
      // Save the current context state
      ctx.save();
  
      // Extract values
      const x = item.itemExtra.x;
      const y = item.itemExtra.y;
      const radius = item.itemExtra.radius;
      const color = item.itemExtra.color || 'black';
      const fill = item.itemExtra.fill || false;
      const startAngle = (item.itemExtra.startAngle) || 0 * (Math.PI / 180);
      const endAngle = (item.itemExtra.endAngle || 360) * (Math.PI / 180);
      const dash = item.itemExtra.dash || 0;
      const gap = item.itemExtra.gap || 0;
      const lineWidth = item.itemExtra.lineWidth || 1;
      const globalAlpha = item.itemExtra.globalAlpha || 1;
  
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