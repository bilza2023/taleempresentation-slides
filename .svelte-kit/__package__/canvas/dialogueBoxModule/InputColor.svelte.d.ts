/** @typedef {typeof __propDef.props}  InputColorProps */
/** @typedef {typeof __propDef.events}  InputColorEvents */
/** @typedef {typeof __propDef.slots}  InputColorSlots */
export default class InputColor extends SvelteComponent<{
    value: any;
    redraw: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputColorProps = typeof __propDef.props;
export type InputColorEvents = typeof __propDef.events;
export type InputColorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        redraw: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
