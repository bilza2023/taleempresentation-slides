/** @typedef {typeof __propDef.props}  StudentOptionsProps */
/** @typedef {typeof __propDef.events}  StudentOptionsEvents */
/** @typedef {typeof __propDef.slots}  StudentOptionsSlots */
export default class StudentOptions extends SvelteComponent<{
    sheetItem: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StudentOptionsProps = typeof __propDef.props;
export type StudentOptionsEvents = typeof __propDef.events;
export type StudentOptionsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
