function pivot (arr, start=0, end=arr.length) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    };
    
    let pivot = arr[start];
    let swapidx = start;
    
    for(let i=start+1; i<= end; i++) {
      if(pivot > arr[i]) {
        swapidx++;
        swap(arr,swapidx,i);
      }
    }
    
    swap(arr,start,swapidx);
    return swapidx;
  }
  
  function quicksort(arr, left=0, right=arr.length-1) {
    if(left < right) {
      let pivotIndex = pivot(arr,left,right);
      
      quicksort(arr,left,pivotIndex-1);
      quicksort(arr,pivotIndex + 1, right);
    }
    return arr;
  }
  