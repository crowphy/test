/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
let stack=[];
let res=0;
var BSTIterator = function(root) {
   //加入树的最左边的一条链
   while(root){
       stack.push(root);
       root=root.left;
   }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function(p) {
    //先弹出左子树
    p=stack.pop();
    //保存当前弹出的值
    res=p.val;
    //加入右子树中的最左边的一条链
    p=p.right;
    while(p){
        stack.push(p);
        p=p.left;
    }
    return res;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
   return stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 const root = [[[7,3,15,null,null,9,20]],[],[],[],[],[],[],[],[],[]];
 var obj = new BSTIterator(root)
//  var param_1 = obj.next()
//  var param_2 = obj.hasNext()

 while(obj.hasNext()) {
    console.log(obj.next())
 }