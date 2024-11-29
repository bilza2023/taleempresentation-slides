export default class SpriteObject extends ItemObject {
    constructor(itemData: null | undefined, assets: any);
    mouseOldX: number;
    mouseOldY: number;
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
    set width(newWidth: number);
    get width(): number;
    set height(newHeight: number);
    get height(): number;
}
import ItemObject from './ItemObject';
