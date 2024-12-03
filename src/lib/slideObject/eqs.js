

import getNewSlide from "./getNewSlide";
import getNewItem from "./getNewItem";
import eqsHealth  from "../eqs/eqsHealth";

export default class Eqs{

newSlide(){
return getNewSlide('Eqs');
}  

newItem(){
return getNewItem();
}

checkHealth(slide, fix = false){
    return eqsHealth(slide,fix);
}


}