export default async function PATCH(link,body,options={}){
    const response = await fetch(link,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body,
        ...options
    })
    return response
}