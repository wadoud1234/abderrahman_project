export default async function DELETE(link,options={}){
    const response = await fetch(link,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        ...options
    })
    return response
}