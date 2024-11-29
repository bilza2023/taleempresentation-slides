/** @typedef {typeof __propDef.props}  LowerToolBarProps */
/** @typedef {typeof __propDef.events}  LowerToolBarEvents */
/** @typedef {typeof __propDef.slots}  LowerToolBarSlots */
export default class LowerToolBar extends SvelteComponent<{
    i: any;
    item: any;
    addEq: any;
    moveUpEq: any;
    moveDownEq: any;
    setEqType: any;
    delEq: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LowerToolBarProps = typeof __propDef.props;
export type LowerToolBarEvents = typeof __propDef.events;
export type LowerToolBarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        i: any;
        item: any;
        addEq: any;
        moveUpEq: any;
        moveDownEq: any;
        setEqType: any;
        delEq: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
