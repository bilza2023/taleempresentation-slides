/** @typedef {typeof __propDef.props}  SelectionManagerProps */
/** @typedef {typeof __propDef.events}  SelectionManagerEvents */
/** @typedef {typeof __propDef.slots}  SelectionManagerSlots */
export default class SelectionManager extends SvelteComponent<{
    drawHandles?: ((ctx: any) => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
    get drawHandles(): (ctx: any) => void;
}
export type SelectionManagerProps = typeof __propDef.props;
export type SelectionManagerEvents = typeof __propDef.events;
export type SelectionManagerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        drawHandles?: ((ctx: any) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
