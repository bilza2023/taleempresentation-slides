/** @typedef {typeof __propDef.props}  LinesDdProps */
/** @typedef {typeof __propDef.events}  LinesDdEvents */
/** @typedef {typeof __propDef.slots}  LinesDdSlots */
export default class LinesDd extends SvelteComponent<{
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LinesDdProps = typeof __propDef.props;
export type LinesDdEvents = typeof __propDef.events;
export type LinesDdSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        extra: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
