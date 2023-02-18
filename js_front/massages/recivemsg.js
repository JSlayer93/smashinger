import { socket } from "../index.js"
import { elements } from "../elements/elements.js"
import { createOtherMsg } from "./openMsg.js"


export const reciveMsg = () => {
<<<<<<< HEAD
    socket.on("reciveMsg", (msg, id, hisid) => {
        sendNotif(hisid)
        if(localStorage.getItem("id") == id && localStorage.getItem("Msgid") == hisid && localStorage.getItem("Msgid")){
=======
    socket.on("reciveMsg", (msg, name, hisname) => {
        sendNotif(hisname)
        if(localStorage.getItem("name") == name && localStorage.getItem("Msgname") == hisname && localStorage.getItem("Msgname")){
>>>>>>> origin/main
            createOtherMsg(msg)
        }
    })
}

<<<<<<< HEAD
export const sendNotif = (id) => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted" && document.visibilityState == "hidden"){
            let notification = new Notification("MSGrecived", {
                body: `you recived massage from ${id}`
            })
        }
    })
}
=======
export const sendNotif = (name) => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted" && document.visibilityState == "hidden"){
            new Notification("MSGrecived", {
                body: `you recived massage from ${name}`
            })
        }
    })
}
>>>>>>> origin/main
