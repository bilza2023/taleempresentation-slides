/** @typedef {typeof __propDef.props}  TrNoProps */
/** @typedef {typeof __propDef.events}  TrNoEvents */
/** @typedef {typeof __propDef.slots}  TrNoSlots */
export default class TrNo extends SvelteComponent<{
    title: any;
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrNoProps = typeof __propDef.props;
export type TrNoEvents = typeof __propDef.events;
export type TrNoSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: any;
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
