import { elements } from "../elements/elements.js";

var Opener = false
var ConuntIndex = 0

export const createUser = async (justZ, count) => {
    while(justZ < count && justZ < 5){
        const data = await fetch(`https://smash-api1.herokuapp.com/users`, {
            method: "GET"
        }).catch(err => {console.log(err)})
        const returnData = await data.json()
        var name = returnData.msg2[justZ].name
        
        if(name != localStorage.getItem("name")){
            const User = `
            <nav class="FriendProfile">
                <img src="https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg" alt="">
                <p>${name}</p>
            </nav>`
            elements.friendsDiv.insertAdjacentHTML('beforeend', User)
        }
        justZ = justZ + 1
    }
    elements.userLoadGif.classList.add("no_visible")
}

export const Usercount = async () => {
    const data = await fetch(`https://smash-api1.herokuapp.com/users`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    var count = returnData.msg
    if(returnData.msg != 0 && count != 0){
        createUser(0, returnData.msg)
        count = count - 1
    }
}

export const closeOpenFriends = () =>{
    if(window.innerWidth >= 600){
        if(Opener){
            Opener = false
            elements.userSec.style.width = "30%"
            elements.MsgSec.style.width = "70%"
            elements.MsgSec.style.transition = "0.3s"
            elements.userSec.style.transition = "0.3s"
        }else{
            Opener = true
            elements.userSec.style.width = "0%"
            elements.MsgSec.style.width = "100%"
            elements.MsgSec.style.transition = "0.3s"
            elements.userSec.style.transition = "0.3s"
        }
    }else{
        if(Opener){
            Opener = false
            elements.userSec.style.width = "70%"
            elements.MsgSec.style.width = "30%"
            elements.MsgSec.style.transition = "0.3s"
            elements.userSec.style.transition = "0.3s"
        }else{
            Opener = true
            elements.userSec.style.width = "0%"
            elements.MsgSec.style.width = "100%"
            elements.MsgSec.style.transition = "0.3s"
            elements.userSec.style.transition = "0.3s"
        }
    }
}