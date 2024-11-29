/** @typedef {typeof __propDef.props}  AddToolbarProps */
/** @typedef {typeof __propDef.events}  AddToolbarEvents */
/** @typedef {typeof __propDef.slots}  AddToolbarSlots */
export default class AddToolbar extends SvelteComponent<{
    addNewItem: any;
    clone?: (() => void) | undefined;
    deleteFn?: (() => void) | undefined;
    showCanvas?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AddToolbarProps = typeof __propDef.props;
export type AddToolbarEvents = typeof __propDef.events;
export type AddToolbarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        addNewItem: any;
        clone?: (() => void) | undefined;
        deleteFn?: (() => void) | undefined;
        showCanvas?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
