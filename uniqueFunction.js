
function functionUnique(...arr){
    const numbers = arr.flat();
    const unique = {};
    
    numbers.forEach((num) => {
        unique[num] = (unique[num] || 0) + 1; 
    })
    
    const distinctUnique = Object.keys(unique).filter(num => unique[num] === 1).map(Number);
    return distinctUnique;
}


const result = functionUnique([1,2,3], [2,3,4], [3,4,5])
console.log(result);
