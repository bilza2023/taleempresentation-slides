# Slides For Taleem Presentation 


# Version 0.4.0 (30-Nov-2024)

- This library has 2 slides "Eqs" and "canvas". It means that we have Player and Editor for each slide.

- In future we will add more slides here as well.

- No major changes in the present slides just improve the code.

- KEEP IN MIND: that at this level we just deal with 1 slide since this is not a presentation level rather we are at slide level.

- This library also does not have "currentSlide" since that is also above this level of the app. We just export players and editors for each slide.

- We need "assets" from parent app (taleempresentation).

- We DO NOT  need to add "upgrade/diagnose" function here.. this layer should not know about old formats!!! .

### Pages/Routes

- There is an EqPlayer and Editor Pages which let you create an Eq slide and save it to the localstorage from which the EqPlayer reads and display.

- For canvas There is just CanvasEditor since it displays the canvas in editor directly so there is no need for a seperate player page here.


## Usage

### CanvasEditor:

```javascript
<div class="w-full bg-gray-700 text-white py-2 px-1 min-h-screen ">
  {#if slide && assets}
    <CanvasEditor
     bind:items = {slide.items}
     bind:slideExtra = {slide.slideExtra}
     {assets}
     {showAddToolbar}
    />
  {/if}
</div>
```

### CanvasEditor API:

```javascript
   export let items;
   export let slideExtra;
   export let assets;
   export let showAddToolbar = true;
```    
---


### CanvasPlayer:

```javascript
    <CanvasPlayer
        {items}
        {slideExtra}
        {assets}

        {postDraw}
        {eventMouseDown}
        {eventMouseUp}
        {eventDblClick}
        {eventMouseMove}
    />
```

### CanvasPlayer API:

```javascript
  export let slideExtra = {};
  export let items;
  export let assets;
  export let preDraw = () => {};   
  export let postDraw = () => {};  
  export let eventMouseMove = () => {};
  export let eventMouseDown = () => {};
  export let eventMouseUp = () => {};  
  export let eventClick = () => {};  
  export let eventDblClick = () => {};  
//export let eventKeyDown = () => {}; 

```

## Differences between Canvas and Eqs Slides:

  - Eqs just have fields just like canvas slides:
       `uuid`, 
       `slideExtra` , 
       `items` , 
       `type` and 
       `template` 
       `version`  (basic)
       `startTime`
       `endTime`

  - The difference is in startTime and endTime. Many Eqs slides will have startTime and endTime but they are actually calculated from item[0].startTime and last item.endTime. so the main difference between both the slides in how the start and end time are calculated.

  - Inside items each item in Eqs must have following fields just like canvas slide, no difference here:
      - "uuid": "30749bf1-c089-484b-ad2f-2f8aee8b7264",
      - "name": "",
      - "content": "",
      - "showAt": 0,
      - "hideAt": null,
      - "itemExtra"  // This is an object which canvas and Eqs have different.
 

 -  item.itemExtra : in canvas the item.itemExtra is different for each canvas-item-type (which is based on item.itemExtra.command). However is Eqs each item.itemExtra is same:

```javascript 
          "itemExtra": {
          "startTime": 0,
          "endTime": 5,
          "code": "Write the following quadratic equations in the standard form and point out pure quadratic equations.",
          "type": "hdg",
          "sp": []
        }
```
 - `Eqs.item.itemExtra.type` : One of the  complications that we have in Eqs slide in item.itemExtra.type. This can be of :

```javascript
const availableEqsItems = ['hdg' , 'code', 'txt' ];
```

- `Eqs.item.itemExtra.sp` Another complicated item in  side panel.  which is in this format:

```javascript
          "sp": [
            {
              "code": "https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/baloons.png",
              "type": "img"
            }
          ]
```
- Eqs item.itemExtra is `sp` (side panel) has following types
```javascript
const availableEqsSpItems = ['code' , 'text', 'img' , 'heading' , 'table' , 'tableCode' ];
```

## License
MIT © Bilal Tariq