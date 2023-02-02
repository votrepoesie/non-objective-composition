
//how do I condense this code
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

//noticed that if declare randomColor outside the functions then every cube changes to the same color 
//but maybe I'm just doing something wrong

function changeBack() {
    function primaryColors(items) {
        return items [Math.floor(Math.random() * items.length)]; 
    }
    const items = ['#ff0101', '#fff001', '#0101fd', '#30303a', '#f9f9f9', '#f9f9f9', '#f9f9f9']
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
for (let i = 0; i < c5.length; i++) {
    c5[i].addEventListener('mouseover', changeColor5);
    c5[i].addEventListener('mouseout', changeBack)
}

//c6

function changeColor6() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c6 = document.getElementsByClassName('c6');
    for (let i = 0; i < c6.length; i++) {
        c6[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c6 = document.getElementsByClassName('c6');
for (let i = 0; i < c6.length; i++) {
    c6[i].addEventListener('mouseover', changeColor6);
    c6[i].addEventListener('mouseout', changeBack)
}

//c7

function changeColor7() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c7 = document.getElementsByClassName('c7');
    for (let i = 0; i < c7.length; i++) {
        c7[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c7 = document.getElementsByClassName('c7');
for (let i = 0; i < c7.length; i++) {
    c7[i].addEventListener('mouseover', changeColor7);
    c7[i].addEventListener('mouseout', changeBack)
}

//c8

function changeColor8() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c8 = document.getElementsByClassName('c8');
    for (let i = 0; i < c7.length; i++) {
        c8[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c8 = document.getElementsByClassName('c8');
for (let i = 0; i < c8.length; i++) {
    c8[i].addEventListener('mouseover', changeColor8);
    c8[i].addEventListener('mouseout', changeBack)
}

//9

function changeColor9() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c9 = document.getElementsByClassName('c9');
    for (let i = 0; i < c7.length; i++) {
        c9[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c9 = document.getElementsByClassName('c9');
for (let i = 0; i < c8.length; i++) {
    c9[i].addEventListener('mouseover', changeColor9);
    c9[i].addEventListener('mouseout', changeBack)
}

//10

function changeColor10() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c10 = document.getElementsByClassName('c10');
    for (let i = 0; i < c7.length; i++) {
        c10[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c10 = document.getElementsByClassName('c10');
for (let i = 0; i < c10.length; i++) {
    c10[i].addEventListener('mouseover', changeColor10);
    c10[i].addEventListener('mouseout', changeBack)
}

//11

function changeColor11() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c11 = document.getElementsByClassName('c11');
    for (let i = 0; i < c7.length; i++) {
        c11[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c11 = document.getElementsByClassName('c11');
for (let i = 0; i < c8.length; i++) {
    c11[i].addEventListener('mouseover', changeColor11);
    c11[i].addEventListener('mouseout', changeBack)
}


//12

function changeColor12() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c12 = document.getElementsByClassName('c12');
    for (let i = 0; i < c7.length; i++) {
        c12[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c12 = document.getElementsByClassName('c12');
for (let i = 0; i < c12.length; i++) {
    c12[i].addEventListener('mouseover', changeColor12);
    c12[i].addEventListener('mouseout', changeBack)
}

//13

function changeColor13() {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const c13 = document.getElementsByClassName('c13');
    for (let i = 0; i < c7.length; i++) {
        c13[i].style.backgroundColor = randomColor;
    }
    this.style.backgroundColor = randomColor;
}

const c13 = document.getElementsByClassName('c13');
for (let i = 0; i < c13.length; i++) {
    c13[i].addEventListener('mouseover', changeColor13);
    c13[i].addEventListener('mouseout', changeBack)
}

//14
//15