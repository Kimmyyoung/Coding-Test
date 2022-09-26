/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    //greedy
    
    //7-1-5-3-6-4
    //1-2-3-4-5-6
   
    
    let maxprofit = 0;
    let cheapestprice = prices[0];
    
    for(let i=0; i<prices.length; i++) {
        let price = prices[i];
        
        if(price < cheapestprice) {cheapestprice = price;}
        
        let currentprofit = price - cheapestprice;
        maxprofit = Math.max(currentprofit, maxprofit);
        
    }
    
    return maxprofit;
    
};

