async function greet(){
    return "hello everyone";
}
greet().then((value)=>{
    console.log(value);
})

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function display() {
    const result = await fetchData();

    console.log(result);
}

display();

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);
    }
    catch(error) {
        console.log("Error:", error);
    }
}

getUsers();

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1 Completed");
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2 Completed");
        }, 1000);
    });
}

async function runSteps() {

    try {

        const result1 = await step1();
        console.log(result1);

        const result2 = await step2();
        console.log(result2);

    }
    catch(error) {
        console.log(error);
    }

}

runSteps();