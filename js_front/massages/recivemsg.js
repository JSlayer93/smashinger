import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createOtherMsg } from "./openMsg.js"


export const reciveMsg = () => {
    socket.on("reciveMsg", (msg, id, hisid) => {
        console.log("recived")
        if(localStorage.getItem("id") == id && localStorage.getItem("Msgid") == hisid && localStorage.getItem("Msgid")){
            createOtherMsg(msg)
        }
    })
}
