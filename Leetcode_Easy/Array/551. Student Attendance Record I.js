let absencecount = 0;
let latecount = 0;
s = s.toString().split("");



 for(let i = 0; i<s.length; i++) {
   
       if(s[i] == "A") {
           absencecount = absencecount + 1;
       }
   

       if(s[i] == "L") {
           latecount = latecount + 1;
       }else {
         latecount = 0;    
       }

   
   if(absencecount > 1 || latecount > 2) return false;
   
 }

return true;