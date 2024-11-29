


export default function rect(ctx,item){
    ctx.save();
    // debugger;
      // Extract values
      const x = item.itemExtra.x;
      const y = item.itemExtra.y;
      const width = item.itemExtra.width;
      const height = item.itemExtra.height;
      const color =  item.itemExtra.color ?? 'white';
      const filled = item.itemExtra.filled;
      const dash =   item.itemExtra.dash ?? 0;
      const gap =    item.itemExtra.gap ?? 0;
      const lineWidth =  item.itemExtra.lineWidth ?? 1;
      const globalAlpha =  item.itemExtra.globalAlpha ?? 1;
    
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