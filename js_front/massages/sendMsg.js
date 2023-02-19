import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createMainMsg, createOtherMsg } from "./openMsg.js"


export const sendMsg = (text) => {
    socket.emit("sendMsg", text, localStorage.getItem("Msgid"), localStorage.getItem("id"))
    createMainMsg(text)
    socket.emit("MSGrecived", localStorage.getItem("id"), localStorage.getItem("Msgid"), text)
}
