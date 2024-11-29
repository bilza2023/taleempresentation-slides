/**
 * 6-Sep-2024
 * Handle represents a handle on canvas used to edit items.
 * Base Class: has further child classes
 *   - Dragger: Edits the item's x and y values.
 *   - Adder: Edits a specific property of the item (e.g., width, opacity, etc).
 *
 * Main Tasks
 * ==========
 * - Handle edits the item properties it's assigned to.
 * - Handle also updates its own location to stay in sync with the item.
 *
 * Component Object Usage
 * ======================
 * Methods for using Handle in Component Object:
 *  - loadHandles: Loads any combination of Dragger and Adder into the Component Object.
 *  - drawHandles: Calls the draw method for all loaded handles.
 *  - update: Main function:
 *      - `selectedItem.update` is called in mouse-move, triggered every time an item is
 *          selected and the mouse moves.
 *      - Component Object calls the update method of each handle.
 *      - Handle's update method:
 *          1. Checks if `isSelected`.
 *          2. Calls `updateFunction` (filled by child classes like Adder and Dragger).
 * --Addition :
 * - Updates- just like Component Object needs getX and getY we also need toadd these in handle and give itemData as starting data. since handles x and y is derived from the item so it makes no sense to update handle location every time THIS IS JUST A FUNCTION  let it get recalculated each time. So now i do not need update handle position functions since "draw" uses functions for x and y
 * Future Addition:
 *  - Scaler: Edits both width and height, but requires adding a scaler function in the Component Object.
 */
export default class Handle {
    constructor(itemData: any, fnList: any);
    itemData: any;
    fnList: any;
    color: string;
    width: number;
    height: number;
    icon: string;
    useInitialValue: boolean;
    isSelected: boolean;
    isHit(mouseX: any, mouseY: any): boolean;
    selectIfHit(mouseX: any, mouseY: any): void;
    deselect(): void;
    draw(ctx: any): void;
    update(item: any, mouseX: any, mouseY: any): void;
    updateFunction(item: any, mouseX: any, mouseY: any): void;
    getX(): void;
    getY(): void;
}
