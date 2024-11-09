import { SvelteComponentTyped } from "svelte";
import { type KonvaEvents } from './util/events';
declare const __propDef: {
    props: {
        config?: import("konva/lib/Group").GroupConfig | undefined;
        handle?: import("konva/lib/Group").Group | undefined;
        staticConfig?: boolean | undefined;
    };
    slots: {
        default: {};
    };
    events: KonvaEvents;
};
export type GroupProps = typeof __propDef.props;
export type GroupEvents = typeof __propDef.events;
export type GroupSlots = typeof __propDef.slots;
/**
 * The Group component needs to be placed inside a svelte-konva Layer or Group component.
 *
 * The Group component automatically groups all components that are placed inside it.
 *
 * ### Usage:
 * ```tsx
 * <Group>
 * Place components that should be grouped here
 * </Group>
 * ```
 *
 * ### Static config:
 * By default svelte-konva will automatically update your config prop on `dragend` and `transformend` events to match the config state (position, rotation, scale, ...) with the internal Konva state.
 * If you additionally bind the config prop your reactive blocks will also be triggered once this happens.
 * There might be cases where this behavior is not beneficial in this case you can disable it by passing the `staticConfig = true` prop to the component.
 *
 * Further information: [Konva API docs](https://konvajs.org/api/Konva.Group.html), [svelte-konva docs](https://konvajs.org/docs/svelte)
 */
export default class Group extends SvelteComponentTyped<GroupProps, GroupEvents, GroupSlots> {
}
export {};
