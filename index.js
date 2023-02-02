
//this a dumb how do I condense this code
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 

//c1

function changeColor1() {
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
    function primaryColors(items) {
        return items [Math.floor(Math.random() * items.length)]; 
    }
    const items = ['#ff0101', '#fff001', '#0101fd', '#30303a', '#f9f9f9']
    this.style.backgroundColor = primaryColors(items);
}
  
const c1 = document.getElementsByClassName('c1');
for (let i = 0; i < c1.length; i++) {
    c1[i].addEventListener('mouseover', changeColor1);
    c1[i].addEventListener('mouseout', changeBack)
}

//c2

function changeColor2() {
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
    c2[i].addEventListener('mouseover', changeColor2);
    c2[i].addEventListener('mouseout', changeBack)
}
  

//c3

function changeColor3() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c3 = document.getElementsByClassName('c3');
    for (let i = 0; i < c3.length; i++) {
        c3[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c3 = document.getElementsByClassName('c3');
for (let i = 0; i < c2.length; i++) {
    c3[i].addEventListener('mouseover', changeColor3);
    c3[i].addEventListener('mouseout', changeBack)
}

//c4

function changeColor4() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c4 = document.getElementsByClassName('c4');
    for (let i = 0; i < c4.length; i++) {
        c4[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c4 = document.getElementsByClassName('c4');
for (let i = 0; i < c4.length; i++) {
    c4[i].addEventListener('mouseover', changeColor4);
    c4[i].addEventListener('mouseout', changeBack)
}

//c5

function changeColor5() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c5 = document.getElementsByClassName('c5');
    for (let i = 0; i < c5.length; i++) {
        c5[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c5 = document.getElementsByClassName('c5');
for (let i = 0; i < c4.length; i++) {
    c5[i].addEventListener('mouseover', changeColor5);
    c5[i].addEventListener('mouseout', changeBack)
}

//c6


//c7
//c8

