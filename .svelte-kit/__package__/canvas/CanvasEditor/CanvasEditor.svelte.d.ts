/** @typedef {typeof __propDef.props}  CanvasEditorProps */
/** @typedef {typeof __propDef.events}  CanvasEditorEvents */
/** @typedef {typeof __propDef.slots}  CanvasEditorSlots */
export default class CanvasEditor extends SvelteComponent<{
    slideExtra: any;
    items: any;
    assets: any;
    showAddToolbar?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CanvasEditorProps = typeof __propDef.props;
export type CanvasEditorEvents = typeof __propDef.events;
export type CanvasEditorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        slideExtra: any;
        items: any;
        assets: any;
        showAddToolbar?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
