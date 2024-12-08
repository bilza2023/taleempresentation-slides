//@ts-nocheck
import ItemObject from './ItemObject';

export default class LineObject extends ItemObject {
    constructor(itemData=null , assets) {
        super(itemData , assets);

        this.dialogueBox = [
          {
            componentName: 'TrPropNumber',
            title: 'x1',
            props: {
              min: 0,
              max: 45
            }
          },
          {
            componentName: 'TrPropNumber',
            title: 'y1',
            props: {
              min: 0,
              max: 25
            }
          },
          {
            componentName: 'TrPropNumber',
            title: 'x2',
            props: {
              min: 0,
              max: 45
            }
          },
          {
            componentName: 'TrPropNumber',
            title: 'y2',
            props: {
              min: 0,
              max: 25
            }
          },
          {
            componentName: 'TrPropNumber',
            title: 'lineWidth',
            props: {
              min: 0,
              max: 25
            }
          },
          // GapDashCommands
          {
            componentName: 'TrPropNumber',
            title: 'dash',
            props: {}
          },
          {
            componentName: 'TrPropNumber',
            title: 'gap',
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
            componentName: 'TrNo',
            title: 'shadowBlur',
            props: {}
          },
          {
            componentName: 'TrColor',
            title: 'shadowColor',
            props: {}
          }
        ];
    }

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
boundingRectangleX() {
    // For LineObject
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    // Return leftmost x coordinate
    return Math.min(x1, x2);
  }
  
  boundingRectangleY() {
    // For LineObject
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    // Return topmost y coordinate
    return Math.min(y1, y2);
  }
  
  get x() {
    return this.boundingRectangleX();
  }
  
  set x(newX) {
    // Calculate the difference between new and current position
    const deltaX = newX - this.x;
    
    // Move both points by the same delta
    this.itemData.itemExtra.x1 += deltaX;
    this.itemData.itemExtra.x2 += deltaX;
  }
  
  get y() {
    return this.boundingRectangleY();
  }
  
  set y(newY) {
    // Calculate the difference between new and current position
    const deltaY = newY - this.y;
    
    // Move both points by the same delta
    this.itemData.itemExtra.y1 += deltaY;
    this.itemData.itemExtra.y2 += deltaY;
  }
  
  get width() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    return Math.abs(x2 - x1);
  }
  
  set width(newWidth) {
    this.itemData.itemExtra.x2 += newWidth;
  }
  
  get height() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    return Math.abs(y2 - y1);
  }
  
  set height(newHeight) {
    this.itemData.itemExtra.y2 += newHeight;
  }    
///////////////////////////////////////////////////////////////////////////
    
}//class
