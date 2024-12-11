
# Canvas Items Fields (itemExtra objects)


Here are all the fields in each of the canvas items. This version is `basic` version of this app. For canvas slide/app this data form the core of the app. infect the entire app is itemExtra objects of each item and an associated draw method that uses the fields in itemExtra objects and draw the item.
<small>(11-Dec-2024 `version = basic`)</small>

<!-- 1 -->
<details>
  <summary>1: angle</summary>

```javascript
      uuid: uuid(),
      type : 'angle',
      x : 100,
      y : 100,

      radius: 25,
      ticks: 3,
      startAngle: -90,
      endAngle: 0,
      lineWidth: 1,
      showOrigin: true,

      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 2 -->
<details>
  <summary>2: Circle</summary>

```javascript
      uuid: uuid(),
      type: 'circle',
      
      x: 150,
      y: 150,
      
      radius: 50,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      
      filled: false,

      color: "gray",
      globalAlpha: 1
```  
</details>

<hr/>

<!-- 3 -->
<details>
  <summary>3: Dot</summary>

```javascript
     uuid: uuid(),
      type: 'dot',

      x: 100,
      y: 100,
      
      label: "label",
      dot_width: 25,
      text_color: "yellowbezier",
      text_size: 40,
      
      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 4 -->
<details>
  <summary>4: ellipse</summary>

```javascript
        uuid: uuid(),
        type: 'ellipse',
        
        x: 100,
        y: 100,

        radiusX: 50,
        radiusY: 75,
        rotation: 0,

        startAngle: 0,
        endAngle: 360,

        lineWidth: 1,
        filled: false,

        color: "red",
        globalAlpha: 1
```  
</details>
<hr/>

<!-- 5 -->
<details>
  <summary>5: icon</summary>

```javascript
 uuid: uuid(),
      type: 'icon',

      x: 100,
      y: 100,

      text: "This is Heading",
      fontSize: 28,
      iconSize: 100,
      fontFamily: 'Arial',
      icon: '🦏',


      showBg: false,
      iconOnTop: true,
      iconErrorX: 0,
      iconErrorY: 0,
      bgColor: 'gray',
      
      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 6 -->
<details>
  <summary>6: image</summary>

```javascript
  uuid: uuid(),
      type: 'image',

      x: 50,
      y: 50,
      
      src: '', //????
      image: null, //????
      
      width: 200,
      height: 200,

      globalAlpha: 1
```  
</details>
<hr/>
<!-- 7 -->
<details>
  <summary>7: line</summary>

```javascript
   uuid: uuid(),
      type: 'line',

      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,

      lineWidth: 1,
      dash     : 0,
      gap      : 0,

      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 8 -->
<details>
  <summary>8: lines</summary>

```javascript
      uuid: uuid(),
      type: 'lines',

      x: 100,
      y: 100,

      drawBorder: false,
      filled: true,
      fillBg: false,
      bgColor: 'red',
      width: 300,
      height: 200,
      lines: [
        {x: 0, y: 35},
        {x: 70, y: 35},
        {x: 70, y: 20},
        {x: 100, y: 50},
        {x: 70, y: 80},
        {x: 70, y: 65},
        {x: 0, y: 65},
        {x: 0, y: 35}
      ],

      color: 'yellow',
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 9 -->
<details>
  <summary>9: list</summary>

```javascript
   uuid: uuid(),
      type: 'list',

      x: 100,
      y: 100,
      text: `Hello 
Hello
Hello`,
   
      fontSize: 20,
      fontFamily: "Arial",

      lineHeightOffset: 10,
      xOffset: 25,

      color: "blue",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 10 -->
<details>
  <summary>10: piechart</summary>

```javascript
 uuid: uuid(),
      type: 'piechart',

      x: 100,
      y: 100,
      
      radius: 50,
      data:'[{"title": "A", "percent": 30, "color": "red"}, {"title": "B", "percent": 50, "color": "blue"}, {"title": "C", "percent": 20, "color": "green"}]',
      
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 11 -->
<details>
  <summary>11: ray</summary>

```javascript
   uuid: uuid(),
      type: 'ray',

      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,

      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: true,
      endArrow: true,
      lineWidth: 1,
      dash     : 0,
      gap      : 0,

      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>
<!-- 12 -->
<details>
  <summary>12: rectangle</summary>

```javascript
      uuid: uuid(),
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 13 -->
<details>
  <summary>13: sprite</summary>

```javascript
     uuid: uuid(),
      type: 'sprite',
      
      x: 100,
      y: 100,
      
      spriteId: "000",
      sheet: "students",
      sheetItem: "student_w_tablet",
      width: 0.5,
      height: 0.5,
      
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 14 -->
<details>
  <summary>14: text</summary>

```javascript
   uuid: uuid(),
      type: 'text',

      x: 100,
      y: 100,

      text: "Add text..",
      fontSize: 30,
      fontFamily: "Arial",

      color: "black",
      globalAlpha: 1
```  
</details>
<hr/>

<!-- 15 -->
<details>
  <summary>15: triangle</summary>

```javascript
  uuid: uuid(),
      type: 'triangle',

      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,

      lineWidth: 2,
      filled: false,

      dash:0,
      gap:0,
      
      color: "red",
      globalAlpha: 1
```  
</details>
<hr/>