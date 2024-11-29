export default class CanvasComponentRegistry {
    components: Map<any, any>;
    register(name: any, ComponentClass: any): void;
    create(name: any, itemData?: null, fnList?: {}, extraData?: null): any;
    hasComponent(name: any): boolean;
    getRegisteredComponents(): any[];
}
