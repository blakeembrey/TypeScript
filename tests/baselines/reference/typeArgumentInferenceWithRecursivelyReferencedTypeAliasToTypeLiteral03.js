//// [typeArgumentInferenceWithRecursivelyReferencedTypeAliasToTypeLiteral03.ts]
type TreeNode = {
    leftRight: [TreeNode, TreeNode];
};

function foo<U>(x: TreeNode) { }
var n: TreeNode;
foo(n);

//// [typeArgumentInferenceWithRecursivelyReferencedTypeAliasToTypeLiteral03.js]
function foo(x) { }
var n;
foo(n);
