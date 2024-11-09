import { SvelteComponentTyped } from "svelte";
import { type KonvaEvents } from './util/events';
declare const __propDef: {
    props: {
        config?: import("konva/lib/shapes/Transformer").TransformerConfig | undefined;
        handle?: import("konva/lib/shapes/Transformer").Transformer | undefined;
        staticConfig?: boolean | undefined;
    };
    slots: {};
    events: KonvaEvents;
};
export type TransformerProps = typeof __propDef.props;
export type TransformerEvents = typeof __propDef.events;
export type TransformerSlots = typeof __propDef.slots;
/**
 * The Transformer component needs to be placed inside a svelte-konva Layer or Group component.
 *
 * In order to add shapes to the transformer you need to access the underlying Konva Transformer by binding the `handle` prop.
 * Then use the `nodes()` function to add any shapes to the Transformer.
 *
 * ### Usage:
 * ```tsx
 * <script>
 * let transformer;
 *
 * transformer.nodes([someShape, otherShape]);
 * </script>
 *
 * <Transformer bind:handle={transformer} />
 * ```
 *
 * ### Static config:
 * By default svelte-konva will automatically update your config prop on `dragend` and `transformend` events to match the config state (position, rotation, scale, ...) with the internal Konva state.
 * If you additionally bind the config prop your reactive blocks will also be triggered once this happens.
 * There might be cases where this behavior is not beneficial in this case you can disable it by passing the `staticConfig = true` prop to the component.
 *
 * Further information: [Konva API docs](https://konvajs.org/api/Konva.Transformer.html), [svelte-konva docs](https://konvajs.org/docs/svelte)
 */
export default class Transformer extends SvelteComponentTyped<TransformerProps, TransformerEvents, TransformerSlots> {
}
export {};
