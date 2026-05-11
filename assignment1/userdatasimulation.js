function userData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("users data");
        },2000);
    });
}
 async function name(){
    try{
    const result = await userData();
    console.log(result);
    }catch(error){
        console.log(error);
    }
    
 }
 console.log("welcome here");
 name()