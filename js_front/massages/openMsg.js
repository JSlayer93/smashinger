import { elements } from "../elements/elements.js";
import { socket } from "../index.js";

export const openMsgBar = (name, oldname) => {
    if(name != oldname){
        elements.MSGLoadGif.classList.remove("no_visible")
        removeMsgH()
        renderMSG(localStorage.getItem("name"), name)
    }
    elements.HeaderName.innerText = name
    elements.HeaderName.classList.remove("no_visible")
    socket.emit("openMsgBar", name, oldname, localStorage.getItem("name"))
    localStorage.setItem(`Msgname`, name)
}


export const removeMsgH = () => {
    while(elements.msg_main_div.firstChild){
        elements.msg_main_div.removeChild(elements.msg_main_div.firstChild);
    }
}

export const renderMSG = async (name, recivename) => {
    const data = await fetch(`https://smash-api1.herokuapp.com/MSG?sender=${name}&reciver=${recivename}`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    for(var i = 0; i < returnData.msg.length; i++){
        if(localStorage.getItem("name") == returnData.msg[i].reciver){
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