import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createOtherMsg } from "./openMsg.js"


export const reciveMsg = () => {
    socket.on("reciveMsg", (msg, name, hisname) => {
        sendNotif(hisname)
        if(localStorage.getItem("name") == name && localStorage.getItem("Msgname") == hisname && localStorage.getItem("Msgname")){
            createOtherMsg(msg)
        }
    })
}

export const sendNotif = (name) => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted" && document.visibilityState == "hidden"){
            new Notification("MSGrecived", {
                body: `you recived massage from ${name}`
            })
        }
    })
}
