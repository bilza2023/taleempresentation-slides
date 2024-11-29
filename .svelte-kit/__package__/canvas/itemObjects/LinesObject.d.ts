export default class LinesObject extends ItemObject {
    constructor(itemData: null | undefined, assets: any);
    dialogueBox: ({
        componentName: string;
        title: string;
        props: {
            min?: undefined;
            max?: undefined;
        };
    } | {
        componentName: string;
        title: string;
        props: {
            min: string;
            max: string;
        };
    } | {
        componentName: string;
        title: string;
        props?: undefined;
    })[];
}
import ItemObject from './ItemObject';
