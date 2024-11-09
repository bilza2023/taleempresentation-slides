import { SvelteComponentTyped } from "svelte";
import Konva from 'konva';
import { type KonvaEvents } from './util/events';
declare const __propDef: {
    props: {
        [x: string]: any;
        config: Konva.ContainerConfig;
        handle?: import("konva/lib/Stage").Stage | null | undefined;
        staticConfig?: boolean | undefined;
    };
    events: KonvaEvents;
    slots: {
        default: {};
    };
};
export type StageProps = typeof __propDef.props;
export type StageEvents = typeof __propDef.events;
export type StageSlots = typeof __propDef.slots;
/**
 * The Stage component is the entry point and parent for all other svelte-konva components.
 * Under the hood it creates a div element where the html canvas is attached to.
 *
 * ### Usage:
 * ```tsx
 * <Stage config={{ width: 1000, height: 1000 }}>
 * Place your Layers here
 * </Stage>
 * ```
 *
 * ### Static config:
 * By default svelte-konva will automatically update your config prop on `dragend` and `transformend` events to match the config state (position, rotation, scale, ...) with the internal Konva state.
 * If you additionally bind the config prop your reactive blocks will also be triggered once this happens.
 * There might be cases where this behavior is not beneficial in this case you can disable it by passing the `staticConfig = true` prop to the component.
 *
 * Further information: [Konva API docs](https://konvajs.org/api/Konva.Stage.html), [svelte-konva docs](https://konvajs.org/docs/svelte)
 */
export default class Stage extends SvelteComponentTyped<StageProps, StageEvents, StageSlots> {
}
export {};
