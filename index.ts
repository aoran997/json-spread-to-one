
function _spread (data: { [x: string]: any }, parentKey?: string) {
  let tmp = {}
  parentKey = parentKey ? parentKey + '.' : ''
  for (let i in data) {
    if (data[i] instanceof Array) {
      tmp[parentKey + i] = data[i]
    } else if (data[i] instanceof Object) {
      if (JSON.stringify(data[i]) === '{}') {
        tmp[parentKey + i] = data[i]
      } else {
        Object.assign(tmp, _spread(data[i], parentKey + i))
      }
    } else {
      tmp[parentKey + i] = data[i]
    }
  }
  return tmp
}


/**
 * 入口函数
 * @param data json对象
 * @param parentKey 不需要
 * @returns 
 */
export const spread = (data: { [x: string]: any } | string) => {
  let tmp: { [x: string]: any }
  if (typeof data === 'string') {
    tmp = JSON.parse(data)
  } else {
    tmp = data
  }
  return _spread(tmp)
}

function _restore (data: { [x: string]: any }) {
  let tmp = {}
  for (let key in data) {
    let li = key.split('.')
    let cc = data[key]
    for (let i = li.length - 1; i > 0; i--) {
      cc = { [li[i]]: cc }
    }
    console.log(Object.keys(cc)[0])
    tmp[Object.keys(cc)[0]] = Object.assign(tmp[Object.keys(cc)[0]] || {}, cc)
  }
  return tmp
}

/**
 * 复原函数
 * @param data json对象
 * @returns 
 */
export const restore = (data: { [x: string]: any }) => {
  let tmp: { [x: string]: any }
  if (typeof data === 'string') {
    tmp = JSON.parse(data)
  } else {
    tmp = data
  }
  return _restore(tmp)
}

export default {
  spread,
  restore
}