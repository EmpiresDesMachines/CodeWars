/*
Write a method that takes a nested hash (object in javascript) as input and returns that hash with added "depth" keys. So, for example, the following input:

{ a: 1, b: 2, c: { d: { e: 3 } } }
would yield the following return value:

{ a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
For Ruby, if the input is not a hash, then the function should return nil. For JavaScript, if the input is not an object (including an array), the function should return null.
*/

function recordDepth(tree, depth = 0) {
  if (typeof tree !== 'object' || Array.isArray(tree) || tree === null) return null;
  tree.depth = depth;
  for (const key in tree) {
    if (typeof tree[key] === 'object') {
      tree[key] = recordDepth(tree[key], ++depth);
    }
  }

  return tree;
}
