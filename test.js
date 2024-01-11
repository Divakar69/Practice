const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    console.log("test")
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

//   console.log(quickSort([1,4,2,10,12,0,3]))

const bubbleSort = (arr)=>{
    let done = false
    while(!done){
        done = true
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1])
            {
                done = false
                let tempVar = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tempVar
            }
        }
    }
    return arr
}

console.log(bubbleSort([-1,1,4,2,0,10,12,0,3,2]))