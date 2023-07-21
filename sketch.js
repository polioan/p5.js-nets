'use strict'

const $drawDots = qs('#drawDots')
const $distance = qs('#distance')
const $count = qs('#count')
const $randomSpeed = qs('#randomSpeed')
const $speed = qs('#speed')
const $randomR = qs('#randomR')
const $r = qs('#r')
const $color = qs('#color')

let dots
let bdist
let isDraw
let fillColor = '#ffffff'

function setupCanvas() {
  let canvas

  if (windowWidth < 500) {
    canvas = createCanvas(windowWidth, 500)
    pixelDensity(1)
  } else {
    canvas = createCanvas(500, 500)
  }

  const canvasOriginalParent = canvas.parent()
  canvas.parent('canvasWrapper')
  canvasOriginalParent.remove()

  smooth(2)
}

function setup() {
  setupCanvas()

  qs('input[type="submit"]').addEventListener('click', restart)

  $randomSpeed.addEventListener('click', function (e) {
    $speed.disabled = e.target.checked
  })

  $randomR.addEventListener('click', function (e) {
    $r.disabled = e.target.checked
  })

  restart()
}

function restart() {
  fillColor = $color.value
  stroke(fillColor)

  isDraw = $drawDots.checked
  bdist = $distance.valueAsNumber

  dots = new Array($count.valueAsNumber)
  for (let i = 0; i < dots.length; i++) {
    const dot = new Dot()
    if (!$randomSpeed.checked) dot.speed = $speed.valueAsNumber
    if (!$randomR.checked) dot.r = $r.valueAsNumber
    dots[i] = dot
  }
}

function draw() {
  background(0)
  for (let i = 0; i < dots.length; i++) {
    for (let j = 0; j < i; j++) {
      const d = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y)
      if (d < bdist) {
        line(dots[i].x, dots[i].y, dots[j].x, dots[j].y)
      }
    }
    dots[i].update()
    if (isDraw) dots[i].draw()
  }
}
