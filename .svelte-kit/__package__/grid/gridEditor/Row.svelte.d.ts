/** @typedef {typeof __propDef.props}  RowProps */
/** @typedef {typeof __propDef.events}  RowEvents */
/** @typedef {typeof __propDef.slots}  RowSlots */
export default class Row extends SvelteComponent<{
    currentTime: any;
    rowItem: any;
    itemIndex: any;
    showBdr?: boolean | undefined;
    showShowAt?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RowProps = typeof __propDef.props;
export type RowEvents = typeof __propDef.events;
export type RowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        currentTime: any;
        rowItem: any;
        itemIndex: any;
        showBdr?: boolean | undefined;
        showShowAt?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
