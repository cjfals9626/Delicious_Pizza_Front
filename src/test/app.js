import {sum} from './math.js';
import '../assets/scss/app.scss'
import testImg from '../assets/images/testImg.jpg'

window.addEventListener('DOMContentLoaded', () => {
    sum(1, 2);

    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1> 1 + 2 = ${sum(1, 2)} </h1>
        <img src="${testImg}" alt="testImg" />
    `
         
})