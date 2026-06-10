let correctAnswers = document.querySelectorAll('input');
let button = document.querySelector('button');
let result = document.querySelector('.result');
let numberofquestions = correctanswercount.length;
button.addEventListener('click', () => {
    let correctanswercount = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i].checked) { correctanswercount += 1; }
    }
    result.textContent = `${correctanswercount}/${numberofquestions}`;
})