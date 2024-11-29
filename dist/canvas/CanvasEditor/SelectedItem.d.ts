/**
 * what if SelectedItem has all the items and when ever selectedItemIndex !==  null, it creates a itemObject out of that index and use it  . when it gets mouse move etc it only acts if the index is not null;
 * There should be no external checking in CanvasEditor for is null?
 */
export default class SelectedItem {
    constructor(itemObject: any);
    itemObject: any;
    handles: any[];
    selectedHandle: string | null;
    isDrag: boolean;
    startPositionX: number;
    startPositionY: number;
    initializeHandles(): void;
    drawHandles(ctx: any): void;
    mouseDown(x: any, y: any): boolean;
    mouseMove(x: any, y: any): boolean;
    mouseUp(): void;
    isHit(x: any, y: any): boolean;
}
