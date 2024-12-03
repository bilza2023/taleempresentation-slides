
import getNewSlide from "./getNewSlide";
import getNewItem from "./getNewItem";
import canvasHealth from "../canvas/canvasHealth/canvasHealth";
import CanvasItemsDefaultItemExtras from "../canvas/CanvasItemsDefaultItemExtras";


export default class Canvas{

constructor(){
        this.CanvasItemsDefaultItemExtras = CanvasItemsDefaultItemExtras;
}

newSlide(){
 return getNewSlide('canvas');
}  

newItem(){
return getNewItem();
}

checkHealth(slide, fix = false){
    return canvasHealth(slide,fix);
}


}//canvas end