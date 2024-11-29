/** @typedef {typeof __propDef.props}  InputTextProps */
/** @typedef {typeof __propDef.events}  InputTextEvents */
/** @typedef {typeof __propDef.slots}  InputTextSlots */
export default class InputText extends SvelteComponent<{
    value: any;
    redraw: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputTextProps = typeof __propDef.props;
export type InputTextEvents = typeof __propDef.events;
export type InputTextSlots = typeof __propDef.slots;
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
