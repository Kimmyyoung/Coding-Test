/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(S, T) {
    return backspaceHelper(S) === backspaceHelper(T);
};

var backspaceHelper = function(str) {
    let arr = [];
    for (let char of str) {
        (char === '#') ? arr.pop() : arr.push(char);
    }
    return arr.join("");
}