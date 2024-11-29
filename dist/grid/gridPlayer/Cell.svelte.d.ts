/** @typedef {typeof __propDef.props}  CellProps */
/** @typedef {typeof __propDef.events}  CellEvents */
/** @typedef {typeof __propDef.slots}  CellSlots */
export default class Cell extends SvelteComponent<{
    item: any;
    itemIndex: any;
    pulse?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CellProps = typeof __propDef.props;
export type CellEvents = typeof __propDef.events;
export type CellSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
        itemIndex: any;
        pulse?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
