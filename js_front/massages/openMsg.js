import { elements } from "../elements/elements.js";
import { socket } from "../index.js";

export const openMsgBar = (id, oldid) => {
    if(id != oldid){
        elements.MSGLoadGif.classList.remove("no_visible")
        removeMsgH()
        renderMSG(localStorage.getItem("id"), id)
    }
    renderName(id)
    socket.emit("openMsgBar", id, oldid, localStorage.getItem("id"))
    localStorage.setItem(`Msgid`, id)
}

const renderName = async (id) => {
    const data = await fetch(`https://smash-api1.herokuapp.com/user?id=${id}`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    let name = returnData.msg.name
    elements.HeaderName.innerText = name
    elements.HeaderName.classList.remove("no_visible")
}

export const removeMsgH = () => {
    while(elements.msg_main_div.firstChild){
        elements.msg_main_div.removeChild(elements.msg_main_div.firstChild);
    }
}

export const renderMSG = async (id, reciveid) => {
    const data = await fetch(`https://smash-api1.herokuapp.com/MSG?sender=${id}&reciver=${reciveid}`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    for(var i = 0; i < returnData.msg.length; i++){
        if(localStorage.getItem("id") == returnData.msg[i].reciver){
            createOtherMsg(returnData.msg[i].content)
        }else{
            createMainMsg(returnData.msg[i].content)
        }
    }
    elements.MSGLoadGif.classList.add("no_visible")
}

export const createMainMsg = (msg) => {
    const Msg = `
    <p class="Msg_Me" id="Msg_Me">${msg}</p>
    `
    elements.msg_main_div.insertAdjacentHTML("afterbegin", Msg)
}

export const createOtherMsg = (msg) =>{
    const Msg = `
    <nav class="Nav_Other_Msg" id="Nav_Other_Msg" id="other_msg_div">
        <p class="Msg_Other">${msg}</p>
    </nav>
    `
    elements.msg_main_div.insertAdjacentHTML("afterbegin", Msg)
}
