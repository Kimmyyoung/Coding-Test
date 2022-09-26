var mergeTrees = function(t1, t2) {
    //예외 처리
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    }
    //각 노드의 value 값 더하기
    t1.val += t2.val;
    
    //노드의 좌측 우측 모두 값 넣어주기 
    
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    
    return t1;
};