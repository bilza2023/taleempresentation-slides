//@ts-nocheck
import ItemObject from './ItemObject';

export default class LinesObject extends ItemObject {
    constructor(itemData=null , assets) {
        super(itemData , assets);
    }

////////////////////////////////////////////////////
// eslint-disable-next-line no-unused-vars
draw(ctx, currentTime) {

    const x = this.itemData.itemExtra.x;
    const y = this.itemData.itemExtra.y;
    const width = this.itemData.itemExtra.width;
    const height = this.itemData.itemExtra.height;
    const drawBorder = this.itemData.itemExtra.drawBorder;
    const fill = this.itemData.itemExtra.fill;
    const color = this.itemData.itemExtra.color;
    const fillBg = this.itemData.itemExtra.fillBg;
    const bgColor = this.itemData.itemExtra.bgColor;
    // const gap = this.itemData.itemExtra.gap;
    // const dash = this.itemData.itemExtra.dash;
    const lines = this.itemData.itemExtra.lines;

    const percentToPixel = (percent, dimension) => Math.round((percent / 100) * dimension);

    if (!isShapeClosed(lines)) {
        console.error("The shape is not closed. Unable to fill.");
        return;
    }

    ctx.save();

    if (fillBg) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(x, y, width, height);
    }

    ctx.beginPath();

    const startX = x + percentToPixel(lines[0].x, width);
    const startY = y + percentToPixel(lines[0].y, height);
    ctx.moveTo(startX, startY);

    for (let i = 1; i < lines.length; i++) {
        const lineX = x + percentToPixel(lines[i].x, width);
        const lineY = y + percentToPixel(lines[i].y, height);
        ctx.lineTo(lineX, lineY);
    }

    ctx.closePath();

    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    }

    ctx.strokeStyle = color;
    ctx.stroke();

    if (drawBorder) {
        ctx.strokeStyle = bgColor;
        ctx.lineWidth = 1; // Optional: adjust the border width
        ctx.strokeRect(x, y, width, height);
    }

    ctx.restore();
}


    
}//class
////////////////
function isShapeClosed(lines) {
    if (lines.length < 3) return false;
    
    const firstPoint = lines[0];
    const lastPoint = lines[lines.length - 1];
    
    return (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y);
}