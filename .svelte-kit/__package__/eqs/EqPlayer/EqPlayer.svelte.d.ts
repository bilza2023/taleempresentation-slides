/** @typedef {typeof __propDef.props}  EqPlayerProps */
/** @typedef {typeof __propDef.events}  EqPlayerEvents */
/** @typedef {typeof __propDef.slots}  EqPlayerSlots */
export default class EqPlayer extends SvelteComponent<{
    currentTime?: number | undefined;
    slideExtra?: any[] | undefined;
    items?: any[] | undefined;
    setPulse?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EqPlayerProps = typeof __propDef.props;
export type EqPlayerEvents = typeof __propDef.events;
export type EqPlayerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        currentTime?: number | undefined;
        slideExtra?: any[] | undefined;
        items?: any[] | undefined;
        setPulse?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
