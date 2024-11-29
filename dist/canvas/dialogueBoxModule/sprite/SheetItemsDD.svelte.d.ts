/** @typedef {typeof __propDef.props}  SheetItemsDdProps */
/** @typedef {typeof __propDef.events}  SheetItemsDdEvents */
/** @typedef {typeof __propDef.slots}  SheetItemsDdSlots */
export default class SheetItemsDd extends SvelteComponent<{
    sheet: any;
    sheetItem: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SheetItemsDdProps = typeof __propDef.props;
export type SheetItemsDdEvents = typeof __propDef.events;
export type SheetItemsDdSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sheet: any;
        sheetItem: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
