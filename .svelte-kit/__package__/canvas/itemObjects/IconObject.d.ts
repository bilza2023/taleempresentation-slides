export default class IconObject extends ItemObject {
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
    draw(ctx: any, currentTime: any): void;
    roundRect(ctx: any, x: any, y: any, width: any, height: any, radius: any, color?: string, filled?: boolean, lineWidth?: number, dash?: number, gap?: number, globalAlpha?: number): void;
    text(ctx: any, text: any, x: any, y: any, color?: string, font?: string, shadowOffsetX?: number, shadowOffsetY?: number, shadowBlur?: number, shadowColor?: string, globalAlpha?: number): void;
    set width(newWidth: number);
    get width(): number;
}
import ItemObject from './ItemObject';
