function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1;
  
    let i = 0;
    while (i < arr.length) {
      if (arr[nextNonDuplicate - 1] !== arr[i]) {
        arr[nextNonDuplicate] = arr[i];
        nextNonDuplicate += 1;
      }
      i += 1;
    }
  
    return nextNonDuplicate;
  }
  
  
  console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
  console.log(remove_duplicates([2, 2, 2, 11]));


  /*
  
  Time Complexity 
  : the time complexity of the above algorithm is O(N) where 'N' is the total number of elements in the given number

  Space Complexity 
  : O(1) Since we do not use Hashmap, we saveed the memory from O(N) to O(1)

  */