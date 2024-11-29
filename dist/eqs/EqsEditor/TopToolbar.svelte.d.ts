/** @typedef {typeof __propDef.props}  TopToolbarProps */
/** @typedef {typeof __propDef.events}  TopToolbarEvents */
/** @typedef {typeof __propDef.slots}  TopToolbarSlots */
export default class TopToolbar extends SvelteComponent<{
    add: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TopToolbarProps = typeof __propDef.props;
export type TopToolbarEvents = typeof __propDef.events;
export type TopToolbarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        add: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
