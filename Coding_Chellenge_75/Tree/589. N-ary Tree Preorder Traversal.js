/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let list = [];
    
    let DFS = (root,list)=>{

        if(!root) return list;
        
        list.push(root.val);
        
        for(let child of root.children) {
            DFS(child, list);
        }
        
        return list;
    }
        
    return DFS(root, list);
    
    
    
};