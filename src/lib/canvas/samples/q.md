
Here is a json / js object data file. 

write me a function called "cavnasHealth"-->  This  gets slide data in this format and then check if it fallows correct format or not. 
 
 const report  = await cavnasHealth(slide,fix = false);

report is of type  { "the message" , "result }

it return a report object which has answers to some questions

what to  check for.

    -1 slide must have a filed "version" (fix : if not present add slide.version = 'basic';
    -2 must have   slide.startTime and slide.endTime; (fix: if not add);
    -3 start time must be smaller than endtime if not add "Timing Error.. detail" to report.(fix none)
    - 4: must have items even if empty. (fix: if not add).
    - 4b: must have uuid field . (fix: if not add, i will import "uuid" function to generate unique id).
    - 5: must have slideExtra (fix: if not add).
     "slideExtra": {
    "backgroundColor": "#044810",
    "canvasWidth": 1000,
    "canvasHeight": 360,
    "cellHeight": 25,
    "cellWidth": 25,
    "bgImg": "system_images/bg_images/black_mat.jpg",
    "bgGlobalAlpha": 1,
    "xFactor": 0,
    "yFactor": 0,
    "showGrid": false,
    "gridLineWidth": 1,
    "gridLineColor": "gray"
  },

  6: if slideExtra exist but is missing some field (fix :add them)


NOW INSIDE EACH "item" 

    1: must have uuid, "name,"content,"showAt (fix: if not add).
    2: if missing "itemExtra" report old/non-upgraded data (fix: none this is old/non-upgraded data)
    3: "extra": {} and "arr" should not be there but if there then ok . (fix: remove them).
    4: this data support 12 types of items. you can see the type of each item in item.itemExtra.command (make a list of all 12 items type e.g text, line, lines, image , sprite, circle etc etc) . and check if there is any item type which is not in this list  (fix : none its an error)
    5: finally Each item type has a unique itemExtra object. it is different for "circle" and different for "line" etc. I want you to make copy of itemExtra of all 12 item types and keep them so that each item type itemExtra is checked with its your copy of  itemExtra and any addition / deletion is noted in report (fix: none just add to report). this part of code can be made a seperate function with its own itemExtra objects collection for each item type which i can place in seperate file and the import into cavnasHealth