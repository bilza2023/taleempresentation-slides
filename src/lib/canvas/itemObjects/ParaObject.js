//@ts-nocheck
import ItemObject from './ItemObject';

export default class ParaObject extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
    this._width =  50;       
    this._height =  25;   
    this.dialogueBox = [
      {
        componentName: 'TrTextArea',
        title: 'text',
        props: {}
      },
      {
        componentName: 'TrPropNumber',
        title: 'x',
        props: {}
      },
      {
        componentName: 'TrPropNumber',
        title: 'y',
        props: {}
      },
      {
        componentName: 'TrPropNumber',
        title: 'fontSize',
        props: {}
      },
      {
        componentName: 'TrNo',
        title: 'lineHeightOffset',
        props: {}
      },
      {
        componentName: 'TrNo',
        title: 'xOffset',
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
      // Gap-dash
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

    draw(ctx) {
      ctx.save();
    
      // Set shadow properties
      ctx.shadowOffsetX = this.itemData.itemExtra.shadowOffsetX;
      ctx.shadowOffsetY = this.itemData.itemExtra.shadowOffsetY;
      ctx.shadowBlur = this.itemData.itemExtra.shadowBlur;
      ctx.shadowColor = this.itemData.itemExtra.shadowColor;
    
      ctx.fillStyle = this.itemData.itemExtra.color;
      ctx.font = this.itemData.itemExtra.fontSize + 'px  ' + this.itemData.itemExtra.fontFamily;
    //   ctx.font = this.itemData.itemExtra.fontSize.initialValue + 'px Arial';
      ctx.textBaseline = 'top';
    
      ctx.globalAlpha = this.itemData.itemExtra.globalAlpha;
    
      const lines = this.itemData.itemExtra.text.split('\n'); // Split text into lines based on line breaks
    
      // Loop over each line
      lines.forEach((line, index) => {
        // Calculate y position for each line, adjusting for line height offset
        const lineHeight = parseInt(this.itemData.itemExtra.fontSize, 10) + this.itemData.itemExtra.lineHeightOffset; // Adjusted line height
        const yPos = this.itemData.itemExtra.y + (index * lineHeight);
    
        // Calculate x position for each line, adjusting for xOffset
        const xPos = this.itemData.itemExtra.x + (index * this.itemData.itemExtra.xOffset);
    
        // Call the text method for each line with adjusted positions
        ctx.fillText(line, xPos, yPos);
      });
      ///////////////////////////////////////////////////
    // debugger;
// this._width =  ctx.measureText(text).width;       
// this._height =  ctx.measureText('W').width;       
///////////////////////////////////////////////////
      // Restore the context state
      ctx.restore();
    }
    boundingRectangleX() {
        return this.itemData.itemExtra.x;
    }
    boundingRectangleY() {
        return this.itemData.itemExtra.y;
    }
  
    get width() {
      return this._width;
    }
    set width(newWidth) {
        this.itemData.itemExtra.fontSize += newWidth;
    }
    get height() {
      return this._height;
    }
  
    set height(newHeight) {
        this.itemData.itemExtra.fontSize += newHeight;
    }
    
}//class
