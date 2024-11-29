/** @typedef {typeof __propDef.props}  CommandUiProps */
/** @typedef {typeof __propDef.events}  CommandUiEvents */
/** @typedef {typeof __propDef.slots}  CommandUiSlots */
export default class CommandUi extends SvelteComponent<{
    item: any;
    dialogueBox: any;
    redraw: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CommandUiProps = typeof __propDef.props;
export type CommandUiEvents = typeof __propDef.events;
export type CommandUiSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
        dialogueBox: any;
        redraw: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
