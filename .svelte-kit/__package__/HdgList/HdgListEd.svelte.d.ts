/** @typedef {typeof __propDef.props}  HdgListEdProps */
/** @typedef {typeof __propDef.events}  HdgListEdEvents */
/** @typedef {typeof __propDef.slots}  HdgListEdSlots */
export default class HdgListEd extends SvelteComponent<{
    slideExtra: any;
    pulse: any;
    items?: any[] | undefined;
    theme?: {} | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HdgListEdProps = typeof __propDef.props;
export type HdgListEdEvents = typeof __propDef.events;
export type HdgListEdSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        slideExtra: any;
        pulse: any;
        items?: any[] | undefined;
        theme?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
