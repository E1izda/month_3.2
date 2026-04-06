let count = 0;

const counter = document.querySelector('#number');
const plusBtn = document.querySelector('#increment');
const minusBtn = document.querySelector('#decrement');

plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    counter.style.color = 'green';
});

minusBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
        counter.style.color = 'red';
    }
})

const box = document.querySelector('#box');
const coords = document.querySelector('#coords');

box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    coords.textContent = "x: " + Math.floor(x) + " y: " + Math.floor(y);
})


const input = document.querySelector('#colorInput');

input.addEventListener('input', () => {
    document.body.style.backgroundColor = input.value;
})