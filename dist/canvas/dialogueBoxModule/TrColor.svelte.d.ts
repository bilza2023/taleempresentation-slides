/** @typedef {typeof __propDef.props}  TrColorProps */
/** @typedef {typeof __propDef.events}  TrColorEvents */
/** @typedef {typeof __propDef.slots}  TrColorSlots */
export default class TrColor extends SvelteComponent<{
    title: any;
    itemFiled: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrColorProps = typeof __propDef.props;
export type TrColorEvents = typeof __propDef.events;
export type TrColorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: any;
        itemFiled: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
