const temp = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = temp.flattenDeep(items)
console.log(newItems)