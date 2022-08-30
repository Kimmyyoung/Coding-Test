
var findRotation = function(mat, target) {
    let width = mat[0].length; //example 3 : 3
    let height = mat.length; //example 3 : 3
    
    let normal = true;
    
    let rightOneTimes = true;
    let rightTwoTimes = true;
    let rightThreeTimes = true;
    
    for(let i=0; i<height; i++) {
        for(let j=0; j<width; j++) {
            if(mat[i][j] !== target[i][j]) normal = false;
            //아무것도 돌리지 않았을때 같지 않으면 우선 false;
            
            if(mat[i][j] !== target[j][width-1-i]) {
                rightOneTimes = false;
            } 
            // 오른쪽으로 한번만 돌렸을때 같지않으면 false
            
            if(mat[i][j] !== target[height-1-i][width-1-j]) {
                rightTwoTimes = false;
            }
            
            //오른쪽으로 두번 돌렸을때 같지 않으면 false
            
            if(mat[i][j] !== target[height-1-j][i]) {
                rightThreeTimes = false;
            }
            
            //오른쪽으로 세번 돌렸을때 같지 않으면 false
        }
    }
    
    if(!normal && !rightOneTimes && !rightTwoTimes && !rightThreeTimes) return false;
    
    //셋중에 하나라도 false 이면 이건 그냥 false 
    
    
    return normal || rightOneTimes || rightTwoTimes || rightThreeTimes;
    
    //근데 전부 true 이면 true 반환하기
    
    
};