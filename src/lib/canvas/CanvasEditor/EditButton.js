

export default class EditButton {

constructor(itemObject){

    this.itemObject = itemObject;

    this.flag = "";
    this.icon = "🎸";

    this.offsetX = 0;
    this.offsetY = 0;

    this.color = 'yellow';
    this.buttonSize = 15;

}
getX(){
    return this.itemObject.getX() + this.offsetX;
}
getY(){
    return this.itemObject.getY() + this.offsetY;
}
drawButton(ctx) {
    // Draw the button background
    ctx.globalAlpha = 1;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.getX(), this.getY(), this.buttonSize, this.buttonSize);
    
    // Add text
    ctx.fillStyle = "black";  // Text color
    ctx.font = `${this.buttonSize * 0.6}px Arial`;  // Font size relative to button size
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Draw the text in the center
    const x = this.getX() + (this.buttonSize / 2);  // Center X
    const y = this.getY() + (this.buttonSize / 2);  // Center Y
    ctx.fillText(this.icon, x, y);
}
    
isHit(x, y) {

    return (
      x >= this.getX()  &&
      x <= this.getX()  + this.buttonSize &&
      y >= this.getY()  &&
      y <= this.getY()  + this.buttonSize
    );
}

  





}

