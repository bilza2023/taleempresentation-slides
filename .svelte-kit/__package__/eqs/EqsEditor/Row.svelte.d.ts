/** @typedef {typeof __propDef.props}  RowProps */
/** @typedef {typeof __propDef.events}  RowEvents */
/** @typedef {typeof __propDef.slots}  RowSlots */
export default class Row extends SvelteComponent<{
    item: any;
    i: any;
    updateTimings: any;
    addEq: any;
    moveUpEq: any;
    moveDownEq: any;
    setEqType: any;
    delEq: any;
    currentTime?: number | undefined;
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
        item: any;
        i: any;
        updateTimings: any;
        addEq: any;
        moveUpEq: any;
        moveDownEq: any;
        setEqType: any;
        delEq: any;
        currentTime?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
