/** @typedef {typeof __propDef.props}  CanvasPlayerProps */
/** @typedef {typeof __propDef.events}  CanvasPlayerEvents */
/** @typedef {typeof __propDef.slots}  CanvasPlayerSlots */
export default class CanvasPlayer extends SvelteComponent<{
    items: any;
    assets: any;
    slideExtra?: {} | undefined;
    preDraw?: (() => void) | undefined;
    postDraw?: (() => void) | undefined;
    eventMouseMove?: (() => void) | undefined;
    eventMouseDown?: (() => void) | undefined;
    eventMouseUp?: (() => void) | undefined;
    eventClick?: (() => void) | undefined;
    eventDblClick?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CanvasPlayerProps = typeof __propDef.props;
export type CanvasPlayerEvents = typeof __propDef.events;
export type CanvasPlayerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        assets: any;
        slideExtra?: {} | undefined;
        preDraw?: (() => void) | undefined;
        postDraw?: (() => void) | undefined;
        eventMouseMove?: (() => void) | undefined;
        eventMouseDown?: (() => void) | undefined;
        eventMouseUp?: (() => void) | undefined;
        eventClick?: (() => void) | undefined;
        eventDblClick?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
