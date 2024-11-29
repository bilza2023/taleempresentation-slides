/** @typedef {typeof __propDef.props}  SpriteDdProps */
/** @typedef {typeof __propDef.events}  SpriteDdEvents */
/** @typedef {typeof __propDef.slots}  SpriteDdSlots */
export default class SpriteDd extends SvelteComponent<{
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpriteDdProps = typeof __propDef.props;
export type SpriteDdEvents = typeof __propDef.events;
export type SpriteDdSlots = typeof __propDef.slots;
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
