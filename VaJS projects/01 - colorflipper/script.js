const myColors = ["red", "green", "yellow", "blue", "orange", "grey", "pink", "lightgreen", "lightblue", "violet"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// Работает ЗАЕБИСЬ:
btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = myColors[randomNumber];
    color.textContent = myColors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * myColors.length);


// Работает ХУЁВО:
/* btn.addEventListener('click', () => {
    document.body.style.backgroundColor = myColors[Math.floor(Math.random() *10)];
    color.textContent = myColors[Math.floor(Math.random() *10)];
}); */