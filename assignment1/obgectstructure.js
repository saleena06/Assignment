//step1
const student = {
    name : "john doe",
    age : 20,
    marks :[85,90,78,92,88]

}

//step2
//function1
let marks=student.marks
let sum = 0;
let average;
for(let i=0;i<marks.length;i++){
    sum = sum + marks[i];
    average = sum/marks.length;
}

console.log("total",sum);
console.log("average:",average);

if(average>90){
    console.log("grade:A");
}else if(average>75 && average<89)
{
    console.log("grade:B");
}
else if(average>50 && average<74)
{
  console.log("grade:C")
}else{
    console.log("Fail");
}

 
