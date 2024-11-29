export default class Rectangle extends ItemObject {
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
}
import ItemObject from './ItemObject';
