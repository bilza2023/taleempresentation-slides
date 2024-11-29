export default class TriangleObject extends ItemObject {
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
    set x(newX: number);
    get x(): number;
    set y(newY: number);
    get y(): number;
    boundingRectangleX(): number;
    boundingRectangleY(): number;
    set width(deltaWidth: number);
    get width(): number;
    set height(deltaHeight: number);
    get height(): number;
}
import ItemObject from './ItemObject';
