
import uuid from "../uuid"



export default function newItem( ){
    return {
        uuid : uuid(),
        name : '',
        content : "",
        showAt : 0,
        hideAt : 0,
        itemExtra : {}
    }
}