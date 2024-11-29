/** @typedef {typeof __propDef.props}  CanvasCommandProps */
/** @typedef {typeof __propDef.events}  CanvasCommandEvents */
/** @typedef {typeof __propDef.slots}  CanvasCommandSlots */
export default class CanvasCommand extends SvelteComponent<{
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CanvasCommandProps = typeof __propDef.props;
export type CanvasCommandEvents = typeof __propDef.events;
export type CanvasCommandSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        extra: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
