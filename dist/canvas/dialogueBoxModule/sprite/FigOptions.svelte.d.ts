/** @typedef {typeof __propDef.props}  FigOptionsProps */
/** @typedef {typeof __propDef.events}  FigOptionsEvents */
/** @typedef {typeof __propDef.slots}  FigOptionsSlots */
export default class FigOptions extends SvelteComponent<{
    sheetItem: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FigOptionsProps = typeof __propDef.props;
export type FigOptionsEvents = typeof __propDef.events;
export type FigOptionsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sheetItem: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
