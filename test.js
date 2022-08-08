

 const array = [2, 6, 7, 5, 3];
 

for (let i=0; i<array.length; i++)
{
    let right = 0, left = 0;
    for(let j=0; j<i; j++)
        right = right + array[j];
    for(let j=i+1; j<array.lenght; j++)
        left = left + array[j]
    if(left === right){
        console.log("Same")
    }else{
        console.log("Not Samne")
    }      
}