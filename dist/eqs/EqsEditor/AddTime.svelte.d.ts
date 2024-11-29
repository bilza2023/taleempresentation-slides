/** @typedef {typeof __propDef.props}  AddTimeProps */
/** @typedef {typeof __propDef.events}  AddTimeEvents */
/** @typedef {typeof __propDef.slots}  AddTimeSlots */
export default class AddTime extends SvelteComponent<{
    item: any;
    currentTime: any;
    updateTimings: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AddTimeProps = typeof __propDef.props;
export type AddTimeEvents = typeof __propDef.events;
export type AddTimeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        item: any;
        currentTime: any;
        updateTimings: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
