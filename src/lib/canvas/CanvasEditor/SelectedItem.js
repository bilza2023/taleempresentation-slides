
import Handle from './Handle.js';

export default class SelectedItem {
    constructor(itemObject) {
        this.itemObject = itemObject;
        this.handles = [];
        this.selectedHandle = null;
        this.isDrag = false;
        this.startPositionX = 0;
        this.startPositionY = 0;
        this.initializeHandles();
    }

    initializeHandles() {
        const move = new Handle(
            () => (this.itemObject.boundingRectangleX() + (this.itemObject.width / 2)) - 10,
            () => (this.itemObject.boundingRectangleY() + (this.itemObject.height / 2)) - 10,
            '✥', 'green'
        );
        this.handles.push(move);

        const widthHandle = new Handle(
            () => (this.itemObject.boundingRectangleX() + this.itemObject.width) - 10,
            () => (this.itemObject.boundingRectangleY() + (this.itemObject.height / 2)) - 10, // Changed position to middle-right
            '✥', 'orange'
        );
        this.handles.push(widthHandle);

        const heightHandle = new Handle(
            () => (this.itemObject.boundingRectangleX() + (this.itemObject.width / 2)) - 10, // Changed position to middle-top
            () => this.itemObject.boundingRectangleY() - 10,
            '✥', 'blue'
        );
        this.handles.push(heightHandle);
    }

    drawHandles(ctx) {
        ctx.save();
        ctx.strokeStyle = '#1a73e8';
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(
            this.itemObject.boundingRectangleX(),
            this.itemObject.boundingRectangleY(),
            this.itemObject.width,
            this.itemObject.height
        );

        for (const handle of this.handles) {
            handle.draw(ctx);
        }
        ctx.restore();
    }

    mouseDown(x, y) {
        this.startPositionX = x; // Store initial position
        this.startPositionY = y;
        this.isDrag = true;

        // Check each handle
        if (this.handles[0].isHit(x, y)) {
            this.selectedHandle = 'move';
            console.log("selectedHandle==>move");
            return true;
        }

        if (this.handles[1].isHit(x, y)) {
            this.selectedHandle = 'widen';
            console.log("selectedHandle==>widen");
            return true;
        }

        if (this.handles[2].isHit(x, y)) { // Fixed: checking handles[2] instead of handles[1]
            this.selectedHandle = 'heighten'; // Fixed: correct name
            console.log("selectedHandle==>heighten");
            return true;
        }

        return false;
    }

    mouseMove(x, y) {
        if (!this.isDrag) return false;

        const dx = x - this.startPositionX;
        const dy = y - this.startPositionY;

        switch (this.selectedHandle) {
            case 'move':
                this.itemObject.x = x;
                this.itemObject.y = y;
                break;
            case 'widen':
                this.itemObject.width += dx; // Use dx for smoother resizing
                this.startPositionX = x; // Update start position for next movement
                break;
            case 'heighten':
                this.itemObject.height += dy; // Use dy for smoother resizing
                this.startPositionY = y;
                break;
        }

        return true;
    }

    mouseUp() {
        this.isDrag = false;
        this.selectedHandle = null;
    }

    isHit(x, y) {
        return this.mouseDown(x, y);
    }
}