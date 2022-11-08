/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var map = {}, num;
    
    while(!map[n]) {
        map[n] = true;
        
        num = 0
        while(n > 0) {
            num += (n%10) * (n%10);
            n = Math.floor(n/10);
        }
        if(num === 1) {
            return true;
        }
        n = num;
    }
    return false;
};

  

/*

19 

num = 1 
num1 = 9

1**2 = 1 
9**2 = 81

n = 82
num = 8
num1 = 2

8**2 = 64
2**2 = 4

n = 68
num = 6
num1 = 8

6**2 = 36
8**2 = 64

n = 100
1 + 0 = 1

n=1


*/