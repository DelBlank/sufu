// 数据结构

// 栈
export class Stack {
  constructor() {
    this.stack = {}
    this.length = 0
  }

  // 入栈
  push(el) {
    this.stack[this.length] = el
    this.length += 1
  }

  // 出栈
  pop() {
    if (!this.length) {
      return null
    }

    const el = this.stack[this.length - 1]
    delete this.stack[this.length]

    this.length -= 1

    return el
  }

  // 元素个数
  size() {
    return this.length
  }

  // 是否为空
  isEmpty() {
    return !this.length
  }

  // 清空所有元素
  clear() {
    this.stack = {}
    this.length = 0
  }

  // 输出所有元素
  print() {
    for (let i = 0; i < this.length; i += 1) {
      console.log(JSON.stringify(this.stack[i]))
    }
  }
}
