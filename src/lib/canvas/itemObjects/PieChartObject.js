//@ts-nocheck
import ItemObject from './ItemObject';

export default class PieChartObject extends ItemObject {
    constructor(itemData, assets) {
        super(itemData, assets);
        this.dialogueBox = [
            {
              componentName: 'TrTextArea',
              title: 'data',
            },
            {
              componentName: 'TrPropNumber',
              title: 'x',
              props: {
                min: 0,
                max: 1000
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'y',
              props: {
                min: 0,
                max: 500
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'radius',
              props: {
                min: 0,
                max: 500
              }
            },
          
            // CommonCommands
            {
              componentName: 'TrText',
              title: 'name',
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
            // gap-dash
          
            // shadow
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
        const x = this.itemData.itemExtra.x;
        const y = this.itemData.itemExtra.y;
        const radius = this.itemData.itemExtra.radius;
        const data = JSON.parse(this.itemData.itemExtra.data);
        let startAngle = 0;

        const centerX = x;
        const centerY = y;
        const options = { drawLabelsOutside: false };

        // Save context state
        ctx.save();

        data.forEach(pie => {
            // Draw pie slice
            const endAngle = startAngle + (pie.percent / 100) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = pie.color || '#000';
            ctx.fill();

            // Draw pie title
            const midAngle = startAngle + (endAngle - startAngle) / 2;
            const textX = centerX + Math.cos(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);
            const textY = centerY + Math.sin(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);

            ctx.fillStyle = '#000';
            ctx.font = '14px Arial';
            ctx.fillText(pie.title, textX, textY);

            startAngle = endAngle;
        });

        // Restore context state
        ctx.restore();
    }

    // Calculate the leftmost x coordinate of the pie's bounding box
    boundingRectangleX() {
        const x = this.itemData.itemExtra.x;
        const radius = this.itemData.itemExtra.radius;
        // Add extra space for labels if they're drawn outside
        const labelPadding = 20; // Matches the label offset in draw()
        return x - radius - labelPadding;
    }

    // Calculate the topmost y coordinate of the pie's bounding box
    boundingRectangleY() {
        const y = this.itemData.itemExtra.y;
        const radius = this.itemData.itemExtra.radius;
        // Add extra space for labels if they're drawn outside
        const labelPadding = 20; // Matches the label offset in draw()
        return y - radius - labelPadding;
    }

    get x() {
        return this.boundingRectangleX();
    }

    set x(newX) {
        // Adjust the center x position based on the new bounding box x
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        this.itemData.itemExtra.x = newX + radius + labelPadding;
    }

    get y() {
        return this.boundingRectangleY();
    }

    set y(newY) {
        // Adjust the center y position based on the new bounding box y
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        this.itemData.itemExtra.y = newY + radius + labelPadding;
    }

    get width() {
        // Width is twice the radius plus extra space for labels
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        return (radius + labelPadding) * 2;
    }

    set width(newWidth) {
        this.itemData.itemExtra.radius += newWidth;
    }

    get height() {
        // Height is twice the radius plus extra space for labels
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        return (radius + labelPadding) * 2;
    }

    set height(newHeight) {
            this.itemData.itemExtra.radius += newHeight;
    }
}