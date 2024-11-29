export default class Image2Object {
    constructor(itemData: any, fnList: any);
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
    loadHandles(): void;
    draw(drawLib: any, currentTime: any): void;
    width(): any;
    height(): any;
    getX(): any;
    getY(): any;
    isHit(mouseX: any, mouseY: any): boolean;
}
