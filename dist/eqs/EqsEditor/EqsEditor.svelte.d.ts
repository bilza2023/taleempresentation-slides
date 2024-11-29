/** @typedef {typeof __propDef.props}  EqsEditorProps */
/** @typedef {typeof __propDef.events}  EqsEditorEvents */
/** @typedef {typeof __propDef.slots}  EqsEditorSlots */
export default class EqsEditor extends SvelteComponent<{
    items: any;
    currentTime?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqsEditorProps = typeof __propDef.props;
export type EqsEditorEvents = typeof __propDef.events;
export type EqsEditorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
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
