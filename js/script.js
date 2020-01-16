var form = document.querySelector('form');
var input = document.querySelector('input[name="firstname"]');
var getName;
var h1 = document.querySelector('h1');


function processForm(event) {
    getName = input.value;
    event.preventDefault();
    h1.textContent = "Thanks for submitting your comment " + getName + ".";
    h1.classList.add('animation');
}

form.addEventListener('submit', processForm);



