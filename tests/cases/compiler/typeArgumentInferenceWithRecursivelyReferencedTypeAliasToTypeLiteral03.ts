type TreeNode = {
    leftRight: [TreeNode, TreeNode];
};

function foo<U>(x: TreeNode) { }
var n: TreeNode;
foo(n);