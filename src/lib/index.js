

import CanvasPlayer from "./canvas/CanvasPlayer/CanvasPlayer.svelte";
import CanvasEditor from "./canvas/CanvasEditor/CanvasEditor.svelte";

import EqPlayer from "./eqs/EqPlayer/EqPlayer.svelte";
import EqsEditor from "./eqs/EqsEditor/EqsEditor.svelte";

import CanvasHealthComponent from "./canvas/canvasHealth/CanvasHealthComponent.svelte";
import canvasHealth from "./canvas/canvasHealth/canvasHealth";

import eqsHealth from "./eqs/eqsHealth";


const availableSlideTypes = [ 'canvas', 'Eqs'];

const availableEqsItems = ['hdg' , 'code', 'txt' ];
const availableEqsSpItems = ['code' , 'text', 'img' , 'heading' , 'table' , 'tableCode' ];

const availableCanvasItems = [
    "text",
    "line",
    "lines",
    "rect",
    "para",
    "ellipse",
    "piechart",
    "circle",
    "angleSymbol",
    "dot",
    "icon",
    "polygon",
    "triangle",
    "ray",
    "image",
    "sprite"
];

export {
    CanvasPlayer,
    CanvasEditor,

    EqPlayer,
    EqsEditor,

    availableCanvasItems,
    availableEqsItems,
    availableEqsSpItems,

    availableSlideTypes,

    CanvasHealthComponent,
    canvasHealth,

    eqsHealth
    
}