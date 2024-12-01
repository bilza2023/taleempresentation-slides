please complete the list of fields for each item in ITEM_TYPE_TEMPLATES 

pich each item name from ITEM_TYPE_TEMPLATES 
for example first is "text"

 in addfunctions go to 
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

get all the field from here and from addReqExtraFields

finally the field list of text will look as 
  text: [
        "text",
        "x",
        "y",
        "fontSize",
        "fontFamily",
        "font",

        "translate",
        "command",
        "name",
        "color",
        "showAt",
        "globalAlpha",
        "gap",
        "dash",
        "shadowOffsetX",
        "shadowOffsetY",
        "shadowColor",
        "shadowBlur"

    ],

    complete all