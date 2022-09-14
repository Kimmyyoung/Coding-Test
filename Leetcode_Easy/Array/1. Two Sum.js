/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const numsvisited = {}; //key 값은 num | value 값은 complement {2:0 7: 1}
    const res = [];
      
      // [2,7,11,15] target : 9
      for(let i = 0; i< nums.length; i++){
          const num = nums[i]; //예를들어 num[0] = 2
          const complement = target - num; //9 - 2 = 7;
          
          if(numsvisited[complement] !== undefined){ 
              //numvisited[7] = 1 //7이 배열안에 있으면? 그러면 합이 9가 될 수 있는 원소가 두개 있다는 뜻이므로 
              res.push(i); //res= [2]
              res.push(numsvisited[complement]); //res[2,1]
          }
          
          numsvisited[num] = i; //numsvisited[2] = 0; : key값은 값수 value 값은 인덱스 값 
      }
      
      return res;
  };
  
  //O(n) : We traverse the list containing n elements only once. Each look up the Hashtable costs only O(1) time.
  //O(n) Number of key value pairs stored in hash table sores at most n elements.
  