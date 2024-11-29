/** @typedef {typeof __propDef.props}  PeopleOptionsProps */
/** @typedef {typeof __propDef.events}  PeopleOptionsEvents */
/** @typedef {typeof __propDef.slots}  PeopleOptionsSlots */
export default class PeopleOptions extends SvelteComponent<{
    sheetItem: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PeopleOptionsProps = typeof __propDef.props;
export type PeopleOptionsEvents = typeof __propDef.events;
export type PeopleOptionsSlots = typeof __propDef.slots;
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
