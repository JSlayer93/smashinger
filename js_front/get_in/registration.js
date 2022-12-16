import { elements } from "../elements/elements.js";

export const register = async () => {
    const data = await fetch(`https://smash-api1.herokuapp.com/reg?name=${elements.reg_name.value.toLowerCase()}&password=${elements.reg_password.value}`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    if(returnData.msg != "name is used"){
        regSucces()
    }else{
        alert("choose another name ბიჭო")
    }
}

export const regSucces = () =>{
    elements.log_in_or_reg.classList.add("no_visible")
    localStorage.setItem("Registered", true)
    elements.regIcon.classList.add('no_visible')
    elements.profileIcon.classList.remove('no_visible')
    localStorage.setItem("name", elements.reg_name.value.toLowerCase())
    location.reload()
}