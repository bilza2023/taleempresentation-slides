export default class Handle {
    constructor(xFn: any, yFn: any, pointer?: string, color?: string);
    x: any;
    y: any;
    size: number;
    color: string;
    hoverColor: string;
    isHovered: boolean;
    cursor: string;
    icon: any;
    draw(ctx: any): void;
    isHit(x: any, y: any): boolean;
}
