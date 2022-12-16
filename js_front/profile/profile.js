import { elements } from "../elements/elements.js";



export const alreadyIn = () => {
    elements.regIcon.classList.add('no_visible')
    elements.profileIcon.classList.remove('no_visible')
}

export const showProfile = () =>{
    elements.profile_menu.classList.remove("no_visible")
}

export const closeProfile = () =>{
    elements.profile_menu.classList.add("no_visible")
}

export const log_out = () =>{
    localStorage.removeItem("Registered")
    localStorage.removeItem("name")
    location.reload()
}

export const renderProfile = async (name) =>{
    const data = await fetch(`https://smash-api1.herokuapp.com/user?name=${name}`, {
            method: "GET"
        }).catch(err => {console.log(err)})
        const returnData = await data.json()
        elements.ProfileName.innerHTML = returnData.msg[0].name
}