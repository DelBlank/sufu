// 创建单例
export default factoryMethod => {
  let obj

  return (...rest) => {
    obj = obj || factoryMethod(...rest)

    return obj
  }
}
