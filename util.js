'use strict'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

if (!Element.prototype.remove) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
    }
  }
}

function qs(selector) {
  if (typeof selector !== 'string') {
    throw new Error('Invalid non string selector')
  }
  const element = document.querySelector(selector)
  if (!element) {
    throw new Error('Cant find element with this selector - ' + selector)
  }
  return element
}
