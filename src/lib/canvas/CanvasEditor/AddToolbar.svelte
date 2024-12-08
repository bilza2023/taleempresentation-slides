<script>
    //@ts-nocheck

    import { SmallBtnToolbar } from "sveltetools_bils/src/cmp"; 
    import Icons  from "../icons"; 
    import {SlideObject} from "../../index";

const CanvasItemsMap = SlideObject.Canvas.ItemsMap;
// console.log("CanvasItemsMap",CanvasItemsMap);    
    // export let icons;
    let icons = Icons;
    export let clone=()=>{};
    export let deleteFn=()=>{};
    export let showCanvas=()=>{};


    // import { addEllipse,addCircle,addRect,addAngleSymbol,addDot,addPolygon,addTri,addLines,addLine,addRay,addPara,addText,addSprite,addImage,addIcon,addPieChart} from "./addFunctions";

export let addNewItem;

function tryme(){
debugger;
const t = SlideObject.canvas.CanvasItemsDefaultItemExtras.rect();
return t;
}
</script>
<div class="flex justify-between text-white ">

<div class="flex text-white ">
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('rectangle').data())} icon={icons.RECTANGLE} title="Rect" />

<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('ellipse').data())} icon={icons.ELLIPSE} title="Ellipse" />
<!-- <SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.text())} icon={icons.TEXT} title="Text" /> -->
<SmallBtnToolbar clk={()=>addNewItem( CanvasItemsMap.get('text').data() )} icon={icons.TEXT} title="Text" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('list').data() ) } icon={icons.TEMPLATE} title="List" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('line').data() ) } icon={icons.LINE} title="Line" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('triangle').data())} icon={icons.TRIANGE} title="Tri" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('ray').data())} icon={icons.SUNRISE} title="Ray" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('icon').data())} icon='🦏' title="Icon" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('dot').data())} icon={icons.DOT} title="Dot" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('angle').data())} icon={icons.ANGLE} title="Angle" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('lines').data())} icon={icons.BICYCLE} title="Lines" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('sprite').data())} icon={icons.SPRITE} title="Sprite" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('image').data())} icon={icons.MAP} title="Image" />
<SmallBtnToolbar clk={()=>addNewItem(CanvasItemsMap.get('piechart').data())} icon={icons.PIZZA} title="Pie" />
</div>
            
            
<div class='flex border-2 border-gray-500 rounded-md'>
<SmallBtnToolbar clk={clone} icon={icons.SHEEP} title="Clone" />
<SmallBtnToolbar clk={showCanvas} icon={icons.CANVAS} title="Canvas" />
<SmallBtnToolbar clk={deleteFn} icon={icons.WASTEBASKET} title="Delete" />
</div>

</div>