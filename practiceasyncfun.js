function fun1(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("done");
        },5000);

    });
}
function fun2(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("work");
    },7000);
    });
}
 async function result(){
    try{
        const rel1 =await fun1();
        console.log(rel1);

        const rel2 = await fun2();
        console.log(rel2);
    }catch(error){
        console.log(error);
    }
 }
 console.log("welcome to the page")
 result();