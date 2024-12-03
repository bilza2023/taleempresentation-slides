
i  want to move my code from old code addFunctions.js to new code CanvasItemsDefaultItemExtras

i have placed all the fields in CanvasItemsDefaultItemExtras from addFunctions removing some useless fields. 
--> Please go item by item into addFunctions.js and check if i am missing any fields for any item in my new CanvasItemsDefaultItemExtras (exclude the excluded fields)

- excluded field list : translate,dash,gap,shadowOffsetX,shadowOffsetY,shadowColor,shadowBlur (if these fields are in some items in CanvasItemsDefaultItemExtras its ok but if they are missing then they are removed intentionally so again ok). dont care about these fields .

make a table with col 
1 --->item name 
2---->col 2 missing field
 3----> extra fields


addFunctions.js
//@ts-nocheck

function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
}
function addReqExtraFields(obj,command,color="black"){
  obj.translate = true;
  obj.command = command;
  obj.name = command + "_" +randNo();
  
  obj.color = color,
  obj.showAt = 0;
  obj.globalAlpha = 1;

  obj.gap= 0;
  obj.dash= 0;

  obj.shadowOffsetX = 0;
  obj.shadowOffsetY = 0;
  obj.shadowColor = "gray";
  obj.shadowBlur = 0;
  // === TOTAL 14 attrib 3Xsystem (name,command,translate) 1xcolor 4xvisibiity etc 2xdash-gap 4x shadow 
  return obj;
}
//////////////////////////////////
////////======Add Functions 
//////////////////////////////////

function addLine( ){
  const obj ={
            "x1": 20,
            "y1": 10,
            "x2": 500,
            "y2": 200,
            "lineWidth": 2,              
  };
  return  addReqExtraFields(obj,"line","red"); 
}

function addLines( ){
  const obj = {
    x: 100,
    y: 100,
    drawBorder: false,
    fill: true,
    color: 'yellow',
    fillBg: false,
    bgColor: 'red',
    width:  300,
    height: 200,
    lines: [ // they are actually vertices
        {x: 0, y: 35},    // Start at left, 35% down
        {x: 70, y: 35},   // Line to 70% across (top of stem)
        {x: 70, y: 20},   // Up to 20% height (start of arrowhead)
        {x: 100, y: 50},  // Diagonal to arrow tip
        {x: 70, y: 80},   // Diagonal down (bottom of arrowhead)
        {x: 70, y: 65},   // Back to stem
        {x: 0, y: 65},    // Bottom of stem
        {x: 0, y: 35}     // Close the shape
   
    ]
  };  
  return  addReqExtraFields(obj,"lines","yellow") 
}

function addRect( ){
    const obj = {
          "x": 100,
          "y": 100,
          "width": 100,
          "height": 100,
          "filled": false,
          "lineWidth": 1,
          };
          return  addReqExtraFields(obj,"rect","red") 
  }
function addText( ){
  const obj ={
    "text": "Hello",
    "x": 100,
    "y": 100,
    "fontSize": 20,
    "fontFamily": 'Arial',
    "font": "20px Arial",
  };
return  addReqExtraFields(obj,"text","black") 
}
function addPara( ){
  const obj ={
    "text": "Hello \n Hello \n Hello",
    "x": 100,
    "y": 100,
    "font": "20px Arial",
    "fontSize": 20,
    "fontFamily": 'Arial',
    "lineHeightOffset" : 10,
    "xOffset"        : 10,
};
return  addReqExtraFields(obj,"para","red"); 
}
 function addEllipse( ){
  const obj = { 
    "x":          100,
    "y":          100,
    "radiusX":    50,
    "radiusY":    100,
    "rotation":   0,
    "startAngle": 0,
    "endAngle":   360,
    "lineWidth":  1,
    "fill":       false,
       
    };

    return  addReqExtraFields(obj,"ellipse","red")
  }
  function addPieChart( ){
    const obj = {
      "x": 100,
      "y": 150,
      "radius": 100,
      "data": `
      [
        { "title": "A", "percent": 30, "color": "red" },
        { "title": "B", "percent": 50, "color": "blue" },
        { "title": "C", "percent": 20, "color": "green" }
    ]
      `,
      };
    return  addReqExtraFields(obj,"piechart","red")
  }
  function addCircle( ){
    const obj = {
      "x": 100,
      "y": 150,
      "radius": 100,
      "startAngle": 0 ,
      "endAngle": 360 ,
      "fill": false,
      "lineWidth": 1,
      };
    return  addReqExtraFields(obj,"circle","red")
  }
    // function addRepeatDot( ){
  //   const obj ={
  //     "numberOfDots": 5,
  //     "initialX": 100,
  //     "initialY": 100,
  //     "xFactor": 30,
  //     "yFactor": 0,
  //     "width": 5,
  //   };
  //   return  addReqExtraFields(obj,"repeatDot","yellow") 
  // }
  // function addRepeatText( ){
  //   const obj ={
  //     "textArray":  "1,2,3,4",
  //     "initialX":   100,
  //     "initialY":   100,
  //     "xFactor":    30,
  //     "yFactor":    0,
  //     "font":       "20px Arial"
  //   };
  //   return  addReqExtraFields(obj,"repeatText","red"); 
  // }
  //-----not implemented
  // function addBezier( ){
  //   // debugger;
  //   const obj = {
  //         "x":  3,
  //         "y":  1,
  //         "x1": 29,
  //         "y1": 5,
  //         "x2": 3,
  //         "y2": 10,
  //         "lineWidth": 1,
  //         "showHandle" : false,
  //         };
  //   return  addReqExtraFields(obj,"bezier","red")      
    
  // }
  //-----not implemented
  function addAngleSymbol( ){
    const obj = {
          "x": 100,
          "y": 100,
          "radius": 25,
          "ticks": 3,
          "startAngle": -90,
          "endAngle" : 0,
          "lineWidth" : 1,
          "showOrigin" : true,
          };
          return  addReqExtraFields(obj,"angleSymbol","red") 
  }
  
  function addDot( ){
    const obj = {
          "x": 100,
          "y": 100,
          "label": "label",
          "dot_width": 10,
          "text_color": "yellowbezier",
          "text_size": 24,
          "fill": true,
          };
          return  addReqExtraFields(obj,"dot","red") 
  }
  function addIcon( ){
    const obj = {
          "text": "This is Heading",
          "x": 100,
          "y": 100,
          "fontSize": 28,
          "iconSize": 100,
          "fontFamily": 'Arial',
          "icon": '🦏',
          "showBg": false,
          "iconOnTop": true,
          "iconErrorX": 0,
          "iconErrorY": 0,
          "bgColor": 'gray',

          };
          return  addReqExtraFields(obj,"icon","red") 
  }
  
  function addPolygon( ){
    const obj ={
      "points": [100,100,150,200,10,100],
              "filled": false,
              "lineWidth": 1,
    };
    return  addReqExtraFields(obj,"polygon","red") 
  }

  function addTri( ){
    const obj ={
              "x1": 100,
              "y1": 100,
              "x2": 50,
              "y2": 200,
              "x3": 200,
              "y3": 200,
              "lineWidth": 2,
              "filled": false,
    };
    return  addReqExtraFields(obj,"triangle","red") 
  }
 
  function addRay( ){
    const obj ={
              "x0":           100,
              "y0":           100,
              "x1":           800,
              "y1":           300,
              "lineWidth":    2,
              "arrowWidth":   8,
              "arrowHeight":  12,
              "startArrow": true,
              "endArrow": true,
    };
    return  addReqExtraFields(obj,"ray","yellow") 
  }

 function addImage(){
// const img = new Image();
// img.src = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/wood.jpg';

// img.onload = () => {
            const obj ={
              "src": null,
              "image": null,
              "x": 50,
              "y": 50,
              "ext": 'jpg',
              "width": 200,
              "height": 200,
            };
  return  addReqExtraFields(obj,"image");
      // };
    
  }

  function addSprite( ){
    // debugger;
    const obj ={
      "spriteId": "000",
      "sheet": "students",
      "sheetItem": "student_w_tablet",
      "x": 100,
      "y": 100,
      "width" : 0.5,
      "height" : 0.5,
    };
  return  addReqExtraFields(obj,"sprite","red"); 
  }
  ////////////////////////////////////////////////////////////////

export {   
                addEllipse,
                addCircle,
                addRect,
                addAngleSymbol,
                addDot,
                addPolygon,
                addTri,
                addLines,
                addLine,
                addRay,
                addPara,
                addText,
                addSprite,
                addImage,
                addIcon,
                addPieChart
 }



export default class CanvasItemsDefaultItemExtras {
  static text() {
    return {
      text: "",
      x: 0,
      y: 0,
      fontSize: 20,
      fontFamily: "Arial",
      font: "20px Arial",
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static line() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      lineWidth: 1,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static rect() {
    return {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static para() {
    return {
      text: "",
      x: 0,
      y: 0,
      font: "20px Arial",
      fontSize: 20,
      fontFamily: "Arial",
      lineHeightOffset: 10,
      xOffset: 0,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static ellipse() {
    return {
      x: 0,
      y: 0,
      radiusX: 50,
      radiusY: 25,
      rotation: 0,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      fill: false,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static circle() {
    return {
      x: 100,
      y: 150,
      radius: 100,
      startAngle: 0,
      endAngle: 360,
      fill: false,
      lineWidth: 1,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static piechart() {
    return {
      x: 100,
      y: 150,
      radius: 100,
      data: [
        { title: "A", percent: 30, color: "red" },
        { title: "B", percent: 50, color: "blue" },
        { title: "C", percent: 20, color: "green" }
      ],
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static lines() {
    return {
      x: 100,
      y: 100,
      drawBorder: false,
      fill: true,
      color: 'yellow',
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
      showAt: 0,
      globalAlpha: 1
    };
  }

  static angleSymbol() {
    return {
      x: 100,
      y: 100,
      radius: 25,
      ticks: 3,
      startAngle: -90,
      endAngle: 0,
      lineWidth: 1,
      showOrigin: true,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static dot() {
    return {
      x: 100,
      y: 100,
      label: "label",
      dot_width: 10,
      text_color: "yellowbezier",
      text_size: 24,
      fill: true,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static icon() {
    return {
      text: "This is Heading",
      x: 100,
      y: 100,
      fontSize: 28,
      iconSize: 100,
      fontFamily: 'Arial',
      icon: '🦏',
      showBg: false,
      iconOnTop: true,
      iconErrorX: 0,
      iconErrorY: 0,
      bgColor: 'gray',
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static polygon() {
    return {
      points: [100,100,150,200,10,100],
      filled: false,
      lineWidth: 1,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static triangle() {
    return {
      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,
      lineWidth: 2,
      filled: false,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static ray() {
    return {
      x0: 100,
      y0: 100,
      x1: 800,
      y1: 300,
      lineWidth: 2,
      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: true,
      endArrow: true,
      color: "yellow",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static image() {
    return {
      src: null,
      image: null,
      x: 50,
      y: 50,
      ext: 'jpg',
      width: 200,
      height: 200,
      color: "black",
      showAt: 0,
      globalAlpha: 1
    };
  }

  static sprite() {
    return {
      spriteId: "000",
      sheet: "students",
      sheetItem: "student_w_tablet",
      x: 100,
      y: 100,
      width: 0.5,
      height: 0.5,
      color: "red",
      showAt: 0,
      globalAlpha: 1
    };
  }
}