


export default function rect(ctx,item){
  
    ctx.save();
    const percent_rect_extra = 20; 
    // debugger;
    ctx.font = item.itemExtra.fontSize + 'px ' + item.itemExtra.fontFamily;
    const textWidth = ctx.measureText(item.itemExtra.text).width;
    const textHeight = ctx.measureText('W').width;
    
    ctx.font = item.itemExtra.iconSize + 'px Arial';
    const iconWidth = ctx.measureText(item.itemExtra.icon).width;
    const iconHeight = ctx.measureText('W').width;
    
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = (percent_rect_extra * (largerWidth/100)); 
    const rectangleWidth = largerWidth + extraWidth; 
    
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth)/3); 
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth)/2); 

 if(item.itemExtra.showBg){   
    roundRect(
        ctx,
        item.itemExtra.x,
        item.itemExtra.y, 
        rectangleWidth,
        rectangleHeight + (30 * rectangleHeight/100), 
        30,
        item.itemExtra.bgColor,
        true,
        1,
        0,
        0,
        item.itemExtra.globalAlpha
    );
 }//if show round rectangle
    //icon
    ctx.globalAlpha = item.itemExtra.globalAlpha;
    text(
        ctx,
        item.itemExtra.icon, 
        item.itemExtra.x + iconXAdjust + item.itemExtra.iconErrorX, 
        item.itemExtra.y + item.itemExtra.iconErrorY, 
        item.itemExtra.color, 
        item.itemExtra.iconSize + 'px Arial',
        0,
        0,
        0,
        'black',
        item.itemExtra.globalAlpha
    );
   
//-------------text
    ctx.globalAlpha = item.itemExtra.globalAlpha;
    text(
        ctx,
        item.itemExtra.text, 
        item.itemExtra.x + textXAdjust, 
        item.itemExtra.y + (iconHeight + (20 * iconHeight/100)), 
        item.itemExtra.color, 
        item.itemExtra.fontSize + 'px ' + item.itemExtra.fontFamily,
        0,0,0,'black',
        item.itemExtra.globalAlpha
    );

    ctx.restore();

}

function roundRect(ctx, x, y, width, height, radius, color = 'black', filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();

    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = lineWidth;

    if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
    } else {
        ctx.setLineDash([dash, gap]);
    }

    if (filled) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    ctx.restore();
}

function text(ctx, text, x, y, color = 'black', font = '12px Arial', shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = 'gray', globalAlpha = 1) {
    ctx.save(); 

    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;

    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textBaseline = 'top';

    ctx.globalAlpha = globalAlpha;

    ctx.fillText(text, x, y);

    ctx.restore();
}