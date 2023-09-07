/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const wordsArray = s.split(/\s+/).filter(word => word.length > 0);

    wordsArray.reverse();
    
    return wordsArray.join(' ');
};