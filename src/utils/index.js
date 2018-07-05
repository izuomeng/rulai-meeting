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

export function transTime(time, stamp = true) {
  if (stamp) {
    return miment(time).stamp()
  }
  return miment(time).format('YYYY-MM-DD hh:mm:ss')
}

export function transQuery(obj) {
  return Object.entries(obj).reduce((result, item, index) => {
    // if (!item[1]) {
    //   return result
    // }
    const pre = index === 0 ? '' : '&'
    result += `${pre}${item[0]}=${item[1]}`
    return result
  }, '')
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.onload = e => {
        resolve(e.target.result)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      reject(error)
    }
  })
}
