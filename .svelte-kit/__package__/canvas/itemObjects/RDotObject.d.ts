export default class RDotObject {
    constructor(itemData: any, fnList: any);
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
    loadHandles(): void;
    draw(drawLib: any, currentTime: any): void;
    width(): number;
    height(): number;
    getX(): any;
    getY(): any;
    getHitAreaRadius(): number;
    isHit(mouseX: any, mouseY: any): boolean;
}
