function removeduplicatevalue(arr){
    return [...new Set(arr)];
}


let numbers = [1,2,3,4,5,5,2,3,8,1,9,5,4];
const result = removeduplicatevalue(numbers);
console.log(result);

function removeDuplicateValue(arr) {

    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });

}

let numberss = [1,2,3,4,5,5,2,3,8,1,9,5,4];

const result1 = removeDuplicateValue(numberss);

console.log(result1);