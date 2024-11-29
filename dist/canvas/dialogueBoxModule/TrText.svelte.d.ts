/** @typedef {typeof __propDef.props}  TrTextProps */
/** @typedef {typeof __propDef.events}  TrTextEvents */
/** @typedef {typeof __propDef.slots}  TrTextSlots */
export default class TrText extends SvelteComponent<{
    title: any;
    extra: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrTextProps = typeof __propDef.props;
export type TrTextEvents = typeof __propDef.events;
export type TrTextSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: any;
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
