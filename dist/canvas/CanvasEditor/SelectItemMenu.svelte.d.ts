/** @typedef {typeof __propDef.props}  SelectItemMenuProps */
/** @typedef {typeof __propDef.events}  SelectItemMenuEvents */
/** @typedef {typeof __propDef.slots}  SelectItemMenuSlots */
export default class SelectItemMenu extends SvelteComponent<{
    items: any;
    selectedItemIndex: any;
    setSelectedItemIndex: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectItemMenuProps = typeof __propDef.props;
export type SelectItemMenuEvents = typeof __propDef.events;
export type SelectItemMenuSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        selectedItemIndex: any;
        setSelectedItemIndex: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
