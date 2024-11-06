- In the `CanvasPlayer` component:
  - Expose a set of custom events that the parent component can listen to
  - Examples of custom events:
    - `item-selected(item)`: Emitted when an item is selected on the canvas
    - `item-moved(item, deltaX, deltaY)`: Emitted when an item is moved
    - `item-rotated(item, angle)`: Emitted when an item is rotated
    - `item-scaled(item, scaleX, scaleY)`: Emitted when an item is scaled
  - Trigger these custom events whenever the relevant actions occur on the canvas

- In the editor component:
  - Listen for the custom events emitted by the `CanvasPlayer` component
  - Handle the events and update the UI/state accordingly
  - Example:
    ```html
    <CanvasPlayer
      on:item-selected={handleItemSelected}
      on:item-moved={handleItemMoved}
      on:item-rotated={handleItemRotated}
      on:item-scaled={handleItemScaled}
    />
    ```
    ```javascript
    function handleItemSelected(event) {
      // Update the editor state to reflect the selected item
      selectedItem = event.detail.item;
    }

    function handleItemMoved(event) {
      // Update the position of the selected item in the editor
      selectedItem.x += event.detail.deltaX;
      selectedItem.y += event.detail.deltaY;
    }
    ```

- Advantages:
  - Keeps the `CanvasPlayer` component decoupled from the editor functionality
  - Allows for more flexibility and extensibility in the future
  - Easier to test and maintain the `CanvasPlayer` component in isolation