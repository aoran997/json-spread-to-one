# json-spread-to-one

[![npm](https://img.shields.io/npm/v/emiter-js.svg)](https://www.npmjs.com/package/json-spread-to-one) ![license](https://img.shields.io/npm/l/json-spread-to-one.svg) ![github-issues](https://img.shields.io/github/issues/aoran997/json-spread-to-one.svg) ![npm-downloads](https://img.shields.io/npm/dt/json-spread-to-one.svg)


*导入 npm install json-spread-to-one*
#### json spread tool
##### json 展开工具

*  emample
```
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

spread(tmpdata)
展开
= { 'x.y': [ 'a', 'b', 'c' ], 'z.l': {}, k: 1, l: '0.1' }
```

[demo](https://github.com/aoran997/json-spread-to-one/blob/master/test/index.js)
