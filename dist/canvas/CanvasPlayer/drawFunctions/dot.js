


export default function dot(ctx,item){
    const {
        x,
        y,
        label,
        dot_width,
        text_size,
        color,
        text_color,
        globalAlpha
    } = item.itemExtra;
  
    ctx.save();
    ctx.globalAlpha = globalAlpha;
  
    // Draw the dot
    ctx.beginPath();
    ctx.arc(
        x,
        y,
        dot_width / 2,
        0,
        2 * Math.PI
    );
    ctx.fillStyle = color;
    ctx.fill();
  
    // Draw the label
    ctx.font = `${text_size}px Arial`;
    ctx.fillStyle = text_color;
    ctx.fillText(
        label,
        parseInt(x) - parseInt(dot_width) / 2,
        parseInt(y) + parseInt(dot_width) * 2
    );
  
    ctx.restore();
}