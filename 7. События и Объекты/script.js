// События и Объекты

let sq1 = document.getElementById('sq1');
let sq2 = document.getElementById('sq2');
let sq3 = document.getElementById('sq3');

let sq4 = document.getElementById('sq4');
let sq5 = document.getElementById('sq5');
let sq6 = document.getElementById('sq6');

let sq7 = document.getElementById('sq7');
let sq8 = document.getElementById('sq8');
let sq9 = document.getElementById('sq9');


function turnRed(item) {
    item.target.style.backgroundColor = 'red';

}


// каждый квадрат становится красным только тогда, когда нему кликнули
sq1.addEventListener('click', turnRed);
sq2.addEventListener('click', turnRed);
sq3.addEventListener('click', turnRed);



// каждый квадрат становится красным после наведения на него мышки
sq4.addEventListener('pointerover', turnRed);
sq5.addEventListener('pointerover', turnRed);
sq6.addEventListener('pointerover', turnRed);



// каждый квадрат становился красным ТОЛЬКО тогда, когда мышь находится НАД НИМ
sq7.addEventListener('pointerover', turnBlue);
sq8.addEventListener('pointerover', turnBlue);
sq9.addEventListener('pointerover', turnBlue);


function turnBlue (event) {
    event.target.style.backgroundColor = 'blue';

    event.target.removeEventListener('pointerover',turnBlue);
    event.target.addEventListener('pointerout', turnRed2);
}


function turnRed2 (event) {
    event.target.style.backgroundColor = 'red';

    event.target.removeEventListener('pointerout', turnRed2);
    event.target.addEventListener('pointerover', turnBlue);
}