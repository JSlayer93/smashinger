import { elements } from "../elements/elements.js"
import { regSucces } from "./registration.js"



export const log_in = async() =>{
    const data = await fetch(`https://smash-api1.herokuapp.com/log?name=${elements.reg_name.value.toLowerCase()}&password=${elements.reg_password.value}`, {
        method: "GET"
    }).catch(err => {console.log(err)})
    const returnData = await data.json()
    console.log(returnData.msg)
    if(returnData.msg){
        regSucces(returnData.msg)
    }else{
        alert("პაპს ნუ ატყუებ")
    }
}
