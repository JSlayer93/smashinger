import { elements } from "./elements/elements.js"
import { alreadyIn, closeProfile, log_out, renderProfile, showProfile } from "./profile/profile.js"
import { register } from "./get_in/registration.js"
import { closeOpenFriends, createUser, Usercount } from "./friends/friends.js"
import { log_in } from "./get_in/Log_in.js"
import { createMainMsg, createOtherMsg, openMsgBar } from "./massages/openMsg.js"
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js"
import { reciveMsg } from "./massages/recivemsg.js"
import { sendMsg } from "./massages/sendMsg.js"

export const socket = io("https://smash-api1.herokuapp.com")
socket.on("connect", () => {
    console.log("server is connected")
})

Notification.requestPermission()

if(localStorage.getItem("Registered")){
    renderProfile(localStorage.getItem("name"))
}

if(location.reload){
    localStorage.removeItem("Msgname")
}

if(localStorage.getItem("Registered")){
    socket.emit("join_name_room", localStorage.getItem("name"))
}

elements.msgMenu.addEventListener("submit", function(){
    event.preventDefault()
    if(msgText.value != "" && localStorage.getItem("Msgname")){
        sendMsg(msgText.value)
        msgText.value = ""
    }
})

reciveMsg()

//FRIENDSC
Usercount()

var oldname = ""

addEventListener("click", e => {
    if (localStorage.getItem("Registered")) {
        const target = e.composedPath().find(node => node.classList.contains("FriendProfile"));
        if (target) {
          const friendName = target.textContent.trim();
          openMsgBar(friendName, oldname);
          oldname = friendName;
        }
    }
})



elements.regIcon.addEventListener("click", function(){
    elements.log_in_or_reg.classList.remove("no_visible")
})

elements.reg_btn.addEventListener("click", () => {
    if(elements.reg_name.value != "" && elements.reg_name.value.length < 10 && elements.reg_password.value != "" && elements.reg_password.value.length < 10){
        register()
    }
})

if(localStorage.getItem("Registered")){
    alreadyIn()
}

// LOG IN
elements.log_btn.addEventListener("click", log_in)


// PROFILE MENU
elements.profileIcon.addEventListener("click", showProfile)
elements.profile_close.addEventListener("click", closeProfile)
elements.log_out_btn.addEventListener("click", log_out)


// FRIENDS
elements.friendsIcon.addEventListener("click", closeOpenFriends)
