const la = require('lodash');

const arr = [1,[2,[3,[4]]]]

const item = la.flattenDeep(arr)

console.log(item);