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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if(root === null) return false;
    else if(isSameNode(root, subRoot)) {
        return true;
    }else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
    
  
};

  let isSameNode = function(s, t) {
        if(s === null || t === null) {return s == null && t == null; }
        else if(s.val == t.val) {return isSameNode(s.left, t.left) && isSameNode(s.right, t.right);}
        else{return false;}
    }
  
