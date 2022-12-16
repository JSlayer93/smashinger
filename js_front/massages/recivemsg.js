import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createOtherMsg } from "./openMsg.js"


export const reciveMsg = () => {
    socket.on("reciveMsg", (msg, name, hisname) => {
        console.log("recived")
        if(localStorage.getItem("name") == name && localStorage.getItem("Msgname") == hisname && localStorage.getItem("Msgname")){
            createOtherMsg(msg)
        }
    })
}
