/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    
    //     let map = {};
    //     let value = [];
    //     let output = [];
      
    //     for(let i =0; i<words.length; i++) {
    //         map[words[i]] = map[words[i]] ? map[words[i]] + 1 : 1;
    //     }
        
    //     value = Object.values(map);
    //     value.sort((a,b) => b-a);
        
    //   for(let i=0; i<k; i++) {
    //     if(map[words[i]] == value[i]){
    //       output.push(words[i]);
    //     }
    //   }
     
    //   return output;
        
        
    
        let hash = {};
        for (let word of words) {
            hash[word] = hash[word]+1||1;
        }
        let result = Object.keys(hash).sort((a,b)=>{
                let countCompare = hash[b] - hash[a];
                if (countCompare == 0) return a.localeCompare(b);
                else return countCompare;
            }   
        );
        return result.slice(0, k);
      
    };