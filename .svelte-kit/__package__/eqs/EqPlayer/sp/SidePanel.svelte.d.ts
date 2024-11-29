/** @typedef {typeof __propDef.props}  SidePanelProps */
/** @typedef {typeof __propDef.events}  SidePanelEvents */
/** @typedef {typeof __propDef.slots}  SidePanelSlots */
export default class SidePanel extends SvelteComponent<{
    currentTime: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SidePanelProps = typeof __propDef.props;
export type SidePanelEvents = typeof __propDef.events;
export type SidePanelSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        currentTime: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
