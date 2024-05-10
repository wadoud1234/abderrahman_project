import { useState } from "react";
import LoginForm from "./Login.form";
import { onLoginSubmit } from "./login.helpers";

export default function Login() {
    const [formState,setFormState] = useState({
        email: "",
        password: "",
    })
    async function onSubmit(e){
        e.preventDefault()
        await onLoginSubmit(formState)
    }
    return (
        <LoginForm formState={formState} setFormState={setFormState} onSubmit={onSubmit}/>
    )
  }