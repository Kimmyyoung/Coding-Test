var isIsomorphic = function(s, t) {
    let map1={}, map2={};
    if(s.length !== t.length) return false;
    for(let i=0; i<s.length; i++) {
        if(map1[s.charAt(i)] !== map2[t.charAt(i)] ) return false;
        map1[s.charAt(i)] = i+1;
        map2[t.charAt(i)] = i+1;
    }
    return true;
};