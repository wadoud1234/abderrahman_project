export default async function onRegisterSubmit(values){
    const {name,password,email,confirmPassword} = values;
    console.log({name,password,email,confirmPassword})
}