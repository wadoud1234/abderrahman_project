import { useState } from "react"
import RegisterForm from "./Register.form"
import onRegisterSubmit from "./register.helpers"

export default function Register() {
    const [formState,setFormState] = useState({
        name:"",
        email: "",
        password: "",
        confirmPassword:""
    })

    async function onSubmit(e){
        e.preventDefault()
        await onRegisterSubmit(formState)
    }
  return (
    <RegisterForm formState={formState} setFormState={setFormState} onSubmit={onSubmit}/>
  )
}