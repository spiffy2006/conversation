export default class Storage {
  constructor () {
    this.storage = window.localStorage
  }

  getCollection (key) {
    let json = this.retrieve(key)
    if (!json) {
      json = '[]'
    }
    return JSON.parse(json)
  }

  appendCollection (key, value) {
    let collection = this.retrieve(key)

    if (collection && collection.length) {
      collection.push(value)
    } else {
      collection = [value]
    }

    this.save(key, JSON.stringify(collection))
  }

  save (key, value) {
    this.storage.setItem(key, value)
  }

  retrieve (key) {
    return this.storage.getItem(key)
  }

  delete (key) {
    this.storage.removeItem(key)
  }
}
