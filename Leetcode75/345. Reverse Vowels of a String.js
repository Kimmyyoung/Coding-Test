var reverseVowels = function(s) {
    s = s.split(""); 
    let newArray = [];

    for(let i=0; i<s.length; i++){
        let char = s[i];
        if('aeiouAEIOU'.indexOf(char) !== -1) {
            newArray.push(char);
        }
    }

    //newArray = [e,e,o,e]

    for(let i=0; i<s.length; i++){
        let newChar = s[i];
        if('aeiouAEIOU'.indexOf(newChar) !== -1) {
            s[i] = newArray.pop();
        }
    }
    return s.join(""); // 배열을 다시 문자열로 변환
};
