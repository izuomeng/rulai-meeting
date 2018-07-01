import miment from 'miment'

/**
 * 判断obj参数是否是可以正确枚举的对象
 * 主要是为了排除form-data对象产生的异常现象
 * @param {Object|Array} obj 要判断的元素
 * @returns {Bool}
 */
export function isEnumerable(obj) {
  if (Array.isArray(obj)) {
    return true
  }
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function transTime(time) {
  return miment(time).format('YYYY-MM-DD')
}
