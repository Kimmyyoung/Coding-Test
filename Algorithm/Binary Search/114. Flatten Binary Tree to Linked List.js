/*
    A simple solution is to using Queue. In level order traversal, keep track of previous node.
    Make current node as right child previous and left of previous to NULL 
    This solution requires queue but question askes to solve without additional data stucture

*/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(root == null) return;
    if(root.left == null && root.right == null) return;

    if(root.left !== null) {
        flatten(root.left);

        let tempNode = root.right;
        root.right = root.left;
        root.left = null;

        let curr = root.right;

        while(curr.right !== null) {
            curr = curr.right;
        }

        curr.right = tempNode;
    }

    flatten(root.right);
    return root;
};
