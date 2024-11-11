//@ts-nocheck
import ItemObject from './ItemObject';

export default class PieChartObject extends ItemObject {
    constructor(itemData, assets) {
        super(itemData, assets);
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
        // Adjust radius based on new width (accounting for label padding)
        const labelPadding = 20;
        const newRadius = (newWidth / 2) - labelPadding;
        if (newRadius > 0) {
            this.itemData.itemExtra.radius = newRadius;
        }
    }

    get height() {
        // Height is twice the radius plus extra space for labels
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        return (radius + labelPadding) * 2;
    }

    set height(newHeight) {
        // Adjust radius based on new height (accounting for label padding)
        const labelPadding = 20;
        const newRadius = (newHeight / 2) - labelPadding;
        if (newRadius > 0) {
            this.itemData.itemExtra.radius = newRadius;
        }
    }
}