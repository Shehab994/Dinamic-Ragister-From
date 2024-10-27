

let sliderBox = document.querySelector('.slider-box');
let loginInfo = document.querySelector('.login-info');
let loginBox = document.querySelector('.login');
let ragisterInfo = document.querySelector('.ragister-info');
let ragisterBox = document.querySelector('.ragister');
let container = document.querySelector('.container');

function ragister() {
    sliderBox.classList.add('toggle');
    sliderBox.classList.remove('toggle2');
    container.classList.add('active');
}
function login() {
    sliderBox.classList.remove('toggle');
    sliderBox.classList.add('toggle2');
    container.classList.remove('active');
}
