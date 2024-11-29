export default class RayObject extends ItemObject {
    constructor(itemData: null | undefined, assets: any);
    dialogueBox: ({
        componentName: string;
        title: string;
        props: {
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
    } | {
        componentName: string;
        title: string;
        props: {
            min: string;
            max: string;
            step: string;
        };
    })[];
    drawArrowHead(ctx: any, x1: any, y1: any, x2: any, y2: any, arrowWidth: any, arrowHeight: any): void;
    boundingRectangleX(): number;
    boundingRectangleY(): number;
    set x(newX: number);
    get x(): number;
    set y(newY: number);
    get y(): number;
    set width(deltaWidth: number);
    get width(): number;
    set height(deltaHeight: number);
    get height(): number;
}
import ItemObject from './ItemObject';
