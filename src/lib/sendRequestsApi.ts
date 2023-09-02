interface RequestObject {
    name: string,
    email: string,
    request: string 
}

function sendRequest(request: RequestObject){
    console.log(request)
}