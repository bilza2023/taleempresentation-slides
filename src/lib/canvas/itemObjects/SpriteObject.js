//@ts-nocheck
import ItemObject from './ItemObject';
 
export default class SpriteObject extends ItemObject  {
    constructor(itemData=null , assets) {
        super(itemData , assets);
        this.mouseOldX = 0;
        this.mouseOldY = 0;
        this.dialogueBox = [
            
            {
              componentName: 'TrPropNumber',
              title: 'dx',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'dy',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'wFactor',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'hFactor',
              props: {}
            },
            // CommonCommands
            {
              componentName: 'TrText',
              title: 'name',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'color',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'showAt',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'globalAlpha',
              props: {
                min: '0.0',
                max: '1.0',
                step: '0.1'
              }
            },
            // ShadowCommands
            {
              componentName: 'TrNo',
              title: 'shadowOffsetX',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'shadowOffsetY',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'shadowBlur',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'shadowColor',
              props: {}
            }
          ];
    }
    
 ///////////////////////////////////////////
  // Position getters and setters
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
}

boundingRectangleY() {
    return this.itemData.itemExtra.y;
}

get x() {
    return this.itemData.itemExtra.x;
}

set x(newX) {
    this.itemData.itemExtra.x = newX;
}

get y() {
    return this.itemData.itemExtra.y;
}

set y(newY) {
    this.itemData.itemExtra.y = newY;
}

// Dimension getters and setters
get width() {
    return  200;
    // return 200;
}

set width(newWidth) {
   
}

get height() {
    return 200;
    // return 200;
}

set height(newHeight) {
    // this.itemData.itemExtra.height += 0.1;
}

////////////////////////////////////////////////////
} // class
