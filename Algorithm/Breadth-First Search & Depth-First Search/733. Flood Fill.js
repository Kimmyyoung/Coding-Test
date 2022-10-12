/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    let currentColor = image[sr][sc] //1
    
    if(newColor === currentColor) return image;
    
    function DFS(img, row, col) {
        
        if(row >= image.length || row < 0 || col >= image[0].length || col < 0 || img[row][col] !== currentColor) return;
 
        image[row][col] = newColor;
 
        DFS(img, row-1, col);
        DFS(img, row+1, col);
        DFS(img, row, col+1);
        DFS(img, row, col-1);
        
        return img;
    }
    
    return DFS(image, sr, sc);
     
     
 };