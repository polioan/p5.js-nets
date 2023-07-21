'use strict'

function Dot() {
  this.r = randomInt(5, 15)
  this.halfR = this.r / 2
  this.speed = randomInt(1, 3)
  this.x = randomInt(this.halfR, width - this.halfR)
  this.y = randomInt(this.halfR, height - this.halfR)
  this.direction = random(['ne', 'nw', 'se', 'sw'])
}

Dot.prototype.update = function () {
  switch (this.direction) {
    case 'ne':
      this.x += this.speed
      this.y -= this.speed
      break
    case 'nw':
      this.x -= this.speed
      this.y -= this.speed
      break
    case 'se':
      this.x += this.speed
      this.y += this.speed
      break
    case 'sw':
      this.x -= this.speed
      this.y += this.speed
      break
  }

  if (this.y + this.halfR >= height) {
    if (this.direction === 'se') {
      this.direction = 'ne'
    } else if (this.direction === 'sw') {
      this.direction = 'nw'
    }
  }

  if (this.x + this.halfR >= width) {
    if (this.direction === 'ne') {
      this.direction = 'nw'
    } else if (this.direction === 'se') {
      this.direction = 'sw'
    }
  }

  if (this.y - this.halfR <= 0) {
    if (this.direction === 'nw') {
      this.direction = 'sw'
    } else if (this.direction === 'ne') {
      this.direction = 'se'
    }
  }

  if (this.x - this.halfR <= 0) {
    if (this.direction === 'nw') {
      this.direction = 'ne'
    } else if (this.direction === 'sw') {
      this.direction = 'se'
    }
  }
}

Dot.prototype.draw = function () {
  fill(fillColor)
  circle(this.x, this.y, this.r)
}
