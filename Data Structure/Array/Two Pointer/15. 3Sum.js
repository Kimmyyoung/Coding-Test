/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b) => a-b); //오름 차순 배열 정리
     
    let res = []; //도출해야할 결과 값
    
    
    for(let i=0; i<nums.length; i++){
        const target = 0 - nums[i]; //target 값이랑 비교해야되서 target 값 설정
        let left = i+1; //left pointer
        let right = nums.length - 1; //right pointer 
        
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        } //Notice that the solution set must not contain duplicate triplets.


        //[nums[i] | left | 0 | 0 | right ]
        while(left < right){ 
            if(nums[left] + nums[right] === target){
                res.push([nums[i], nums[left], nums[right]]); //left 값이랑 right 값이랑 더해서 target 값이되면 3값을 모두 더했을때 0가 되는 값이므로 결과값에 넣어준다. 
                left++; //visited 한 left pointer 값을 하나 올려준다. 
                while(nums[left] === nums[left -1]){ 
                    left++;
                } // error : 중복 원소에 대한 오류 해결
            }else if(nums[left] + nums[right] < target){
                left ++; //nums는 오름차순 배열이기 때문에 더한값이 target 보다 작으면 left pointer 를 증가시켜서 결과값을 increase 시켜서 비교할 수 있게한다. 
            }else{ //만약 더한 값이 target 보다 크면 안되기 때문에 가장 큰 값인 right pointer 를 밑으로 내려준다. 결과값 decrease 
                right--;
            }
        }            
    }
    
    return res;

};


// [-1, 2, 1, 2, -1, -4]

// => sort 
// [-4, -1, -1, 1, 2, 2]
//   n   L            R

// target = 0 - (-4) = 4
// nums[L] + nums[R] = 1 < 4 => L++;
// nums[L] + nums[R] = 1 < 4 => L++;
// nums[L] + nums[R] = 3 < 4 => L++;
// nums[L] + nums[R] = 4 = 4 => res.push(nums[left], nums[right], nums[0])
