class EventEmitter {
  constructor() {
    this.events = {}
  }
  subscribe(type, fn) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    const queue = this.events[type]
    if (queue.indexOf(fn) > -1) {
      return
    }
    queue.push(fn)
  }
  remove(type, fn) {
    if (!this.events[type]) {
      return
    }
    const queue = this.events[type]
    this.events[type] = queue.filter(v => v !== fn)
  }
  emit(type, ...args) {
    if (!this.events[type]) {
      return
    }
    const queue = this.events[type]
    queue.forEach(v => v.apply(null, args))
  }
}
export default new EventEmitter()
