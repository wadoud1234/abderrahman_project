export default async function GET(link,options={}){
    const response = await fetch(link,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        ...options
    })
    return response
}