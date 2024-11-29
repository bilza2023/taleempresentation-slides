/** @typedef {typeof __propDef.props}  TrTextAreaProps */
/** @typedef {typeof __propDef.events}  TrTextAreaEvents */
/** @typedef {typeof __propDef.slots}  TrTextAreaSlots */
export default class TrTextArea extends SvelteComponent<{
    title: any;
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrTextAreaProps = typeof __propDef.props;
export type TrTextAreaEvents = typeof __propDef.events;
export type TrTextAreaSlots = typeof __propDef.slots;
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
