import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createOtherMsg } from "./openMsg.js"


export const reciveMsg = () => {
    socket.on("reciveMsg", (msg, id, hisid) => {
        sendNotif(hisid)
        if(localStorage.getItem("id") == id && localStorage.getItem("Msgid") == hisid && localStorage.getItem("Msgid")){
            createOtherMsg(msg)
        }
    })
}

export const sendNotif = (id) => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted" && document.visibilityState == "hidden"){
            let notification = new Notification("MSGrecived", {
                body: `you recived massage from ${id}`
            })
        }
    })
}
