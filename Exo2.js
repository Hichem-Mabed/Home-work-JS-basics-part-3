/*Exercice 2:
Write a JavaScript function to find the common elements from two arrays
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2"]*/
function difference (arr,brr){
    
    for(let i=0;i<=arr.length;i++){
        for(let j=0;j<=brr.length;j++){
           result = arr[i]==brr[j]?true:false;
           if(result==true){
               console.log(arr[i])
           }
        }
    }
}

var c=[1, 2, 3],d=[100, 2, 1, 10];
difference(c,d)