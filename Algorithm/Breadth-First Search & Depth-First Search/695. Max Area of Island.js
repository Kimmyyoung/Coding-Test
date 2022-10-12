/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  
    let answer = 0, row = grid.length, col = grid[0].length;
    
    const dfs = (i,j) => {
        if(i < 0 || j < 0 || i >= row || j >= col || !grid[i][j]) return 0;
        grid[i][j] = 0;
        return 1+dfs(i+1,j)+dfs(i-1,j)+dfs(i,j-1)+dfs(i,j+1);
    };
    
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            if(grid[i][j]) answer = Math.max(answer, dfs(i,j));
        }
    }
    return answer;
    
};

// grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0]
//         [0,0,0,0,0,0,0,1,1,1,0,0,0]
//         [0,1,1,0,1,0,0,0,0,0,0,0,0]
//         [0,1,0,0,1,1,0,0,1,0,1,0,0]
//         [0,1,0,0,1,1,0,0,1,1,1,0,0]
//         [0,0,0,0,0,0,0,0,0,0,1,0,0]
//         [0,0,0,0,0,0,0,1,1,1,0,0,0]
//         [0,0,0,0,0,0,0,1,1,0,0,0,0]]