
//this a dumb how do I condense this code

function changeColor() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c1 = document.getElementsByClassName('c1');
    for (let i = 0; i < c1.length; i++) {
      c1[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

function changeBack() {
    this.style.backgroundColor = '';
}
  
const c1 = document.getElementsByClassName('c1');
for (let i = 0; i < c1.length; i++) {
    c1[i].addEventListener('mouseover', changeColor);
    c1[i].addEventListener('mouseout', changeBack)
}

//--------------------------------

function changeColor1() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c2 = document.getElementsByClassName('c2');
    for (let i = 0; i < c2.length; i++) {
        c2[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c2 = document.getElementsByClassName('c2');
for (let i = 0; i < c2.length; i++) {
    c2[i].addEventListener('mouseover', changeColor1);
    c2[i].addEventListener('mouseout', changeBack)
}
  


