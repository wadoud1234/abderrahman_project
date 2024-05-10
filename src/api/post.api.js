export default async function POST(link,body,options={}){
    const response = await fetch(link,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body,
        ...options
    })
    return response
}