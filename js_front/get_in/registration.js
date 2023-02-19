import { elements } from "../elements/elements.js";

export const register = async () => {
    const data = await fetch(`https://smash-api1.herokuapp.com/reg?name=${elements.reg_name.value.toLowerCase()}&password=${elements.reg_password.value}`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    console.log(returnData)
    if(returnData.msg){
        regSucces(returnData.msg)
    }else{
        alert("choose another name ბიჭო")
    }
}

export const regSucces = (id) =>{
    elements.log_in_or_reg.classList.add("no_visible")
    localStorage.setItem("Registered", true)
    elements.regIcon.classList.add('no_visible')
    elements.profileIcon.classList.remove('no_visible')
    localStorage.setItem("id", id)
    window.location.reload()
}
