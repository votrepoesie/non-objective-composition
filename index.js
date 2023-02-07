//event object connected to event listener
//.target = html element that triggers the event
function changeColor (e) {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    e.target.style.backgroundColor = randomColor
}
  
function changeBack (e) {
    const items = ['#ff0101', '#fff001', '#0101fd', '#30303a', '#f9f9f9', '#f9f9f9', '#f9f9f9', '#f9f9f9']
    const ranIdx = Math.floor(Math.random() * items.length)
    e.target.style.backgroundColor = items[ranIdx]
}
  
function setup () {
    //boxes (variable) stores all hover effects
    const boxes = document.querySelectorAll('.box')
    //loop through array and apply event listeners to each box
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('mouseover', changeColor)
      boxes[i].addEventListener('mouseout', changeBack)
    }
}

window.addEventListener('load', setup)