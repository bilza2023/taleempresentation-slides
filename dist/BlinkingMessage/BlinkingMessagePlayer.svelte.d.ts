/** @typedef {typeof __propDef.props}  BlinkingMessagePlayerProps */
/** @typedef {typeof __propDef.events}  BlinkingMessagePlayerEvents */
/** @typedef {typeof __propDef.slots}  BlinkingMessagePlayerSlots */
export default class BlinkingMessagePlayer extends SvelteComponent<{
    items: any;
    startTime: any;
    endTime: any;
    slideExtra: any;
    extra: any;
    spriteImages: any;
    bgImages: any;
    icons: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BlinkingMessagePlayerProps = typeof __propDef.props;
export type BlinkingMessagePlayerEvents = typeof __propDef.events;
export type BlinkingMessagePlayerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        startTime: any;
        endTime: any;
        slideExtra: any;
        extra: any;
        spriteImages: any;
        bgImages: any;
        icons: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
