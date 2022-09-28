/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
   
    // if(root == null) return null;
   //  if(root.left === p || root.right === q) return root;
    
    
    if(root.val < p.val && root.val < q.val) { return lowestCommonAncestor(root.right, p, q); }
    else if(root.val > p.val && root.val > q.val) { return lowestCommonAncestor(root.left, p, q); }
    
    return root;
    
    
};


// Time Complexity : O(N) wirst case, we travarse thru every Node in the Tree.
// Space Complexity : O(1) We always use one node, regardless of size of BST