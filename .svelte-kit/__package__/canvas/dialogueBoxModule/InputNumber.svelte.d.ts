/** @typedef {typeof __propDef.props}  InputNumberProps */
/** @typedef {typeof __propDef.events}  InputNumberEvents */
/** @typedef {typeof __propDef.slots}  InputNumberSlots */
export default class InputNumber extends SvelteComponent<{
    value: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputNumberProps = typeof __propDef.props;
export type InputNumberEvents = typeof __propDef.events;
export type InputNumberSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
