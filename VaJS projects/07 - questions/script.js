//using selectors inside the element

// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.parentElement.parentElement);
    });
});