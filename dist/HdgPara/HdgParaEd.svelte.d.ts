/** @typedef {typeof __propDef.props}  HdgParaEdProps */
/** @typedef {typeof __propDef.events}  HdgParaEdEvents */
/** @typedef {typeof __propDef.slots}  HdgParaEdSlots */
export default class HdgParaEd extends SvelteComponent<{
    items: any;
    theme: any;
    slideExtra?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HdgParaEdProps = typeof __propDef.props;
export type HdgParaEdEvents = typeof __propDef.events;
export type HdgParaEdSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        theme: any;
        slideExtra?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
