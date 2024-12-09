import  uuid  from '../../../uuid';


export default class Sprite {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'sprite',
      spriteId: "000",
      sheet: "students",
      sheetItem: "student_w_tablet",
      x: 100,
      y: 100,
      width: 0.5,
      height: 0.5,
      color: "red",
      globalAlpha: 1
    };
  }

  
  static draw(ctx, itemExtra,assets) {
 
    try {
      let sprite;
      for (let i = 0; i < assets.spriteImages.length; i++) {
          const element = assets.spriteImages[i];
          if(element.name == itemExtra.sheet) {
              sprite = element;
              break;
          }
      }
      if(!sprite) { throw Error("Sprite not found"); }  
      
/////////////////////////////////////////////////////////////////                                      
      sprite.applyItem(itemExtra.sheetItem);
      if (!sprite.selectedData) { console.warn("sheetItem not found"); return; }

 
      ctx.drawImage(sprite.img,
        sprite.selectedData.sx, //x on source image
        sprite.selectedData.sy, //y on source image
        sprite.selectedData.sw, //width on source image
        sprite.selectedData.sh, //height on source image
        itemExtra.x,//x on destination image
        itemExtra.y,//y on destination image
        sprite.selectedData.sw * Math.abs(itemExtra.width), //width on source image
        sprite.selectedData.sh * Math.abs(itemExtra.height) //height on source image
    );
  } catch (error) {
      // console.error(error);
  }
  }
}