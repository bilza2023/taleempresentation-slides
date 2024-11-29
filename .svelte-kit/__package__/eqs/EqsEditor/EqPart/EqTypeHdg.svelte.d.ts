/** @typedef {typeof __propDef.props}  EqTypeHdgProps */
/** @typedef {typeof __propDef.events}  EqTypeHdgEvents */
/** @typedef {typeof __propDef.slots}  EqTypeHdgSlots */
export default class EqTypeHdg extends SvelteComponent<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqTypeHdgProps = typeof __propDef.props;
export type EqTypeHdgEvents = typeof __propDef.events;
export type EqTypeHdgSlots = typeof __propDef.slots;
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
