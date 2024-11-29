/** @typedef {typeof __propDef.props}  EqPartProps */
/** @typedef {typeof __propDef.events}  EqPartEvents */
/** @typedef {typeof __propDef.slots}  EqPartSlots */
export default class EqPart extends SvelteComponent<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqPartProps = typeof __propDef.props;
export type EqPartEvents = typeof __propDef.events;
export type EqPartSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
