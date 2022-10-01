/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    for(let i =2; i<cost.length; i++) {
      cost[i] += Math.min(cost[i-1], cost[i-2]);
    }
  
  return Math.min(cost[cost.length-1], cost[cost.length-2]);
};

//계단을 한칸씩 올라가는 방법 혹은 두칸씩 올라가는 방법이 있는데 cost 배열 속 인자만큼 값을 지불해야한다. 
//이럴때 가장 최소의 돈을 지불하고 마지막 계단까지 올라 갈 수 있는 금액은 얼마인가?

//T.C : O(n)
//S.C : O(n)