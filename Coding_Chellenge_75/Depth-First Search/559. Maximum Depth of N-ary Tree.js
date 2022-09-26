function Node(val, children) {
    this.val = val;
    this.children = children;
}



var maxDepth = function(root) {
    
    if(!root) return 0;
    //if( root.val === null ) return 0;
    
    let depth = 1;
    let max = 0;
   
    for(let child of root.children) {
        max = Math.max(maxDepth(child), max);
    }
    depth = depth + max;
    
    return depth;
    
};