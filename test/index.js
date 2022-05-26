let tmpdata = {
  x: {
    y: ['a', 'b', 'c']
  },
  z: {
    l: {}
  },
  k: 1,
  l: '0.1'
}

import { spread, restore } from '../dist/index.js'
restore(spread(tmpdata))
console.log(spread(tmpdata))
console.log(restore(spread(tmpdata)))