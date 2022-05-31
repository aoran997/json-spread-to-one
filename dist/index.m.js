this.index = this.index || {};
this.index.m = (function (exports) {
  'use strict';

  function _spread(data, parentKey) {
      let tmp = {};
      parentKey = parentKey ? parentKey + '.' : '';
      for (let i in data) {
          if (data[i] instanceof Array) {
              tmp[parentKey + i] = data[i];
          }
          else if (data[i] instanceof Object) {
              if (JSON.stringify(data[i]) === '{}') {
                  tmp[parentKey + i] = data[i];
              }
              else {
                  Object.assign(tmp, _spread(data[i], parentKey + i));
              }
          }
          else {
              tmp[parentKey + i] = data[i];
          }
      }
      return tmp;
  }
  /**
   * 入口函数
   * @param data json对象
   * @param parentKey 不需要
   * @returns
   */
  const spread = (data) => {
      let tmp;
      if (typeof data === 'string') {
          tmp = JSON.parse(data);
      }
      else {
          tmp = data;
      }
      return _spread(tmp);
  };
  function _restore(data) {
      let tmp = {};
      for (let key in data) {
          let li = key.split('.');
          let cc = data[key];
          for (let i = li.length - 1; i > 0; i--) {
              cc = { [li[i]]: cc };
          }
          if (tmp[li[0]]) {
              tmp[li[0]] = Object.assign({}, tmp[li[0]], cc);
          }
          else {
              tmp[li[0]] = cc;
          }
      }
      return tmp;
  }
  /**
   * 复原函数
   * @param data json对象
   * @returns
   */
  const restore = (data) => {
      let tmp;
      if (typeof data === 'string') {
          tmp = JSON.parse(data);
      }
      else {
          tmp = data;
      }
      return _restore(tmp);
  };
  var index = {
      spread,
      restore
  };

  exports["default"] = index;
  exports.restore = restore;
  exports.spread = spread;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
