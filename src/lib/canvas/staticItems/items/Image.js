import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Image {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'image',
      src: null,
      image: null,
      x: 50,
      y: 50,
      ext: 'jpg',
      width: 200,
      height: 200,
      color: "black",
      globalAlpha: 1
    };
  }
  
  static draw(ctx, itemExtra) {
    if (!itemExtra.image  || itemExtra.image == null) {return;} 
  
    ctx.save(); // Save the current context state
    ctx.globalAlpha =   itemExtra.globalAlpha; // Set the global alpha
    ctx.drawImage(itemExtra.image, itemExtra.x, itemExtra.y, itemExtra.width, itemExtra.height);
    ctx.restore();     
  }
}