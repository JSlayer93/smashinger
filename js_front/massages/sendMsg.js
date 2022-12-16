import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createMainMsg, createOtherMsg } from "./openMsg.js"


export const sendMsg = (text) => {
    socket.emit("sendMsg", text, localStorage.getItem("Msgname"), localStorage.getItem("name"))
    createMainMsg(text)
    socket.emit("MSGrecived", localStorage.getItem("name"), localStorage.getItem("Msgname"), text)
}
