export default class ImageObject extends ItemObject {
    dialogueBox: ({
        componentName: string;
        title: string;
        props: {
            options?: undefined;
            current?: undefined;
            min?: undefined;
            max?: undefined;
            step?: undefined;
        };
    } | {
        componentName: string;
        title: string;
        props: {
            options: string[];
            current: string;
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
            options?: undefined;
            current?: undefined;
        };
    })[];
    loadImage(): void;
}
import ItemObject from './ItemObject';
