/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const result = [];
    
    function bfs (node, depth){
        if(!node) return;
        
        if(!result[depth]) {
            result[depth] = [];
        }
        
        result[depth].push(node.val);
        bfs(node.left, depth+1);
        bfs(node.right, depth+1);
    }
    
    bfs(root,0);
    return result;
};

