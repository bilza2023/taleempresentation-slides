/** @typedef {typeof __propDef.props}  EqPlayerCoreProps */
/** @typedef {typeof __propDef.events}  EqPlayerCoreEvents */
/** @typedef {typeof __propDef.slots}  EqPlayerCoreSlots */
export default class EqPlayerCore extends SvelteComponent<{
    currentTime: any;
    setPulse: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqPlayerCoreProps = typeof __propDef.props;
export type EqPlayerCoreEvents = typeof __propDef.events;
export type EqPlayerCoreSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        currentTime: any;
        setPulse: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
