/** @typedef {typeof __propDef.props}  SelectedItemProps */
/** @typedef {typeof __propDef.events}  SelectedItemEvents */
/** @typedef {typeof __propDef.slots}  SelectedItemSlots */
export default class SelectedItem extends SvelteComponent<{
    assets: any;
    items?: any[] | undefined;
    clone?: (() => void) | undefined;
    selectedItemIndex?: number | undefined;
    currentMouseX?: number | undefined;
    currentMouseY?: number | undefined;
    deleteSelected?: (() => void) | undefined;
}, {
    itemchange: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get clone(): () => void;
    get deleteSelected(): () => void;
}
export type SelectedItemProps = typeof __propDef.props;
export type SelectedItemEvents = typeof __propDef.events;
export type SelectedItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        assets: any;
        items?: any[] | undefined;
        clone?: (() => void) | undefined;
        selectedItemIndex?: number | undefined;
        currentMouseX?: number | undefined;
        currentMouseY?: number | undefined;
        deleteSelected?: (() => void) | undefined;
    };
    events: {
        itemchange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
