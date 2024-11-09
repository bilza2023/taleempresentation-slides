import type Konva from 'konva';
import type { EventDispatcher } from 'svelte';
export type KonvaMouseEvent = CustomEvent<Konva.KonvaEventObject<MouseEvent>>;
export type KonvaWheelEvent = CustomEvent<Konva.KonvaEventObject<WheelEvent>>;
export type KonvaTouchEvent = CustomEvent<Konva.KonvaEventObject<TouchEvent>>;
export type KonvaPointerEvent = CustomEvent<Konva.KonvaEventObject<PointerEvent>>;
export type KonvaDragTransformEvent = CustomEvent<Konva.KonvaEventObject<MouseEvent | PointerEvent | TouchEvent>>;
export interface KonvaEvents {
    mouseover: KonvaMouseEvent;
    mouseout: KonvaMouseEvent;
    mouseenter: KonvaMouseEvent;
    mouseleave: KonvaMouseEvent;
    mousemove: KonvaMouseEvent;
    mousedown: KonvaMouseEvent;
    mouseup: KonvaMouseEvent;
    wheel: KonvaWheelEvent;
    click: KonvaMouseEvent;
    dblclick: KonvaMouseEvent;
    touchstart: KonvaTouchEvent;
    touchmove: KonvaTouchEvent;
    touchend: KonvaTouchEvent;
    tap: KonvaTouchEvent;
    dbltap: KonvaTouchEvent;
    pointerdown: KonvaPointerEvent;
    pointermove: KonvaPointerEvent;
    pointerup: KonvaPointerEvent;
    pointercancel: KonvaPointerEvent;
    pointerover: KonvaPointerEvent;
    pointerenter: KonvaPointerEvent;
    pointerout: KonvaPointerEvent;
    pointerleave: KonvaPointerEvent;
    pointerclick: KonvaPointerEvent;
    pointerdblclick: KonvaPointerEvent;
    dragstart: KonvaDragTransformEvent;
    dragmove: KonvaDragTransformEvent;
    dragend: KonvaDragTransformEvent;
    transformstart: KonvaDragTransformEvent;
    transform: KonvaDragTransformEvent;
    transformend: KonvaDragTransformEvent;
}
/**
 * Registers all possible Konva node events with the provided Svelte dispatcher
 *
 * @param dispatch
 * @param node
 */
export declare function registerEvents(dispatch: EventDispatcher<Record<string, Konva.KonvaEventObject<MouseEvent | PointerEvent | TouchEvent>>>, node: Konva.Node): void;
