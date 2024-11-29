/** @typedef {typeof __propDef.props}  ToolBarProps */
/** @typedef {typeof __propDef.events}  ToolBarEvents */
/** @typedef {typeof __propDef.slots}  ToolBarSlots */
export default class ToolBar extends SvelteComponent<{
    item: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ToolBarProps = typeof __propDef.props;
export type ToolBarEvents = typeof __propDef.events;
export type ToolBarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
