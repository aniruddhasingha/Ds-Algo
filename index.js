function pushZerosToEnd(arr, n) 
{ 
    let count = 0; 
    for (let i = 0; i < n; i++) {
        if (arr[i] != 0){ 
        console.log("+++===+++",count)
            arr[count++] = arr[i]; 
        console.log("---===---",count)
        }
    }
    while (count < n) {
        arr[count++] = 0; 
    }
  console.log(arr);
} 
  
    let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]; 
    let n = arr.length; 
    pushZerosToEnd(arr, n); 
