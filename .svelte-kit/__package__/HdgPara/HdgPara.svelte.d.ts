/** @typedef {typeof __propDef.props}  HdgParaProps */
/** @typedef {typeof __propDef.events}  HdgParaEvents */
/** @typedef {typeof __propDef.slots}  HdgParaSlots */
export default class HdgPara extends SvelteComponent<{
    pulse: any;
    theme: any;
    slideExtra?: any[] | undefined;
    items?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HdgParaProps = typeof __propDef.props;
export type HdgParaEvents = typeof __propDef.events;
export type HdgParaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        pulse: any;
        theme: any;
        slideExtra?: any[] | undefined;
        items?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
