export default class EllipseObject extends ItemObject {
    dialogueBox: ({
        componentName: string;
        title: string;
        props: {
            min: number;
            max: number;
            step?: undefined;
        };
    } | {
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
    boundingRectangleX(): number;
    boundingRectangleY(): number;
    set width(newWidth: number);
    get width(): number;
    set height(newHeight: number);
    get height(): number;
}
import ItemObject from './ItemObject';
