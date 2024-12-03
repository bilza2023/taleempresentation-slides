<script>
    //@ts-nocheck

    import { SmallBtnToolbar } from "sveltetools_bils/src/cmp"; 
    import Icons  from "../icons"; 
    import {SlideObject} from "../../index";
    // export let icons;
    let icons = Icons;
    export let clone=()=>{};
    export let deleteFn=()=>{};
    export let showCanvas=()=>{};


    import { addEllipse,addCircle,addRect,addAngleSymbol,addDot,addPolygon,addTri,addLines,addLine,addRay,addPara,addText,addSprite,addImage,addIcon,addPieChart} from "./addFunctions";

export let addNewItem;

function tryme(){
debugger;
const t = SlideObject.canvas.CanvasItemsDefaultItemExtras.rect();
return t;
}
</script>
<div class="flex justify-between text-white ">

<div class="flex text-white ">
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.rect())} icon={icons.RECTANGLE} title="Rect" />

<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.ellipse())} icon={icons.ELLIPSE} title="Ellipse" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.text())} icon={icons.TEXT} title="Text" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.para())} icon={icons.TEMPLATE} title="List" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.line())} icon={icons.LINE} title="Line" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.triangle())} icon={icons.TRIANGE} title="Tri" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.ray())} icon={icons.SUNRISE} title="Ray" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.icon())} icon='🦏' title="Icon" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.dot())} icon={icons.DOT} title="Dot" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.angleSymbol())} icon={icons.ANGLE} title="Angle" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.lines())} icon={icons.BICYCLE} title="Lines" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.sprite())} icon={icons.SPRITE} title="Sprite" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.image())} icon={icons.MAP} title="Image" />
<SmallBtnToolbar clk={()=>addNewItem(SlideObject.canvas.CanvasItemsDefaultItemExtras.piechart())} icon={icons.PIZZA} title="Pie" />
</div>
            
            
<div class='flex border-2 border-gray-500 rounded-md'>
<SmallBtnToolbar clk={clone} icon={icons.SHEEP} title="Clone" />
<SmallBtnToolbar clk={showCanvas} icon={icons.CANVAS} title="Canvas" />
<SmallBtnToolbar clk={deleteFn} icon={icons.WASTEBASKET} title="Delete" />
</div>

</div>