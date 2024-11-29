/** @typedef {typeof __propDef.props}  TrTfProps */
/** @typedef {typeof __propDef.events}  TrTfEvents */
/** @typedef {typeof __propDef.slots}  TrTfSlots */
export default class TrTf extends SvelteComponent<{
    title: any;
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrTfProps = typeof __propDef.props;
export type TrTfEvents = typeof __propDef.events;
export type TrTfSlots = typeof __propDef.slots;
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
