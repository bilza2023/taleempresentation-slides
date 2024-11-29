/** @typedef {typeof __propDef.props}  InputTextAreaProps */
/** @typedef {typeof __propDef.events}  InputTextAreaEvents */
/** @typedef {typeof __propDef.slots}  InputTextAreaSlots */
export default class InputTextArea extends SvelteComponent<{
    value: any;
    redraw: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputTextAreaProps = typeof __propDef.props;
export type InputTextAreaEvents = typeof __propDef.events;
export type InputTextAreaSlots = typeof __propDef.slots;
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
