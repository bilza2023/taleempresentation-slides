
import uuid from "../uuid"



export default function newSlide(type){
    return {
        
        uuid : uuid(),
        version : 'basic',

        startTime : 0,
        endTime : 10,
        
        type, 
        template : '',


        items : [],
        slideExtra : {},
    }
}