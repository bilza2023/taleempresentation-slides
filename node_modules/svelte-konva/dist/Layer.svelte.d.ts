import { SvelteComponentTyped } from "svelte";
import { type KonvaEvents } from './util/events';
declare const __propDef: {
    props: {
        config?: import("konva/lib/Layer").LayerConfig | undefined;
        handle?: import("konva/lib/Layer").Layer | undefined;
        staticConfig?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: KonvaEvents;
};
export type LayerProps = typeof __propDef.props;
export type LayerEvents = typeof __propDef.events;
export type LayerSlots = typeof __propDef.slots;
/**
 * The Layer component needs to be placed inside a svelte-konva Stage component.
 *
 * ### Usage:
 * ```tsx
 * <Stage config={{ width: 1000, height: 1000 }}>
 * <Layer>
 * 	Place your components here
 * </Layer>
 *
 * You also can add multiple Layers to a Stage
 * </Stage>
 * ```
 *
 * ### Static config:
 * By default svelte-konva will automatically update your config prop on `dragend` and `transformend` events to match the config state (position, rotation, scale, ...) with the internal Konva state.
 * If you additionally bind the config prop your reactive blocks will also be triggered once this happens.
 * There might be cases where this behavior is not beneficial in this case you can disable it by passing the `staticConfig = true` prop to the component.
 *
 * Further information: [Konva API docs](https://konvajs.org/api/Konva.Layer.html), [svelte-konva docs](https://konvajs.org/docs/svelte)
 */
export default class Layer extends SvelteComponentTyped<LayerProps, LayerEvents, LayerSlots> {
}
export {};
