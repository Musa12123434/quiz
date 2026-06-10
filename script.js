let correctAnswers = document.querySelectorAll('.correct');
let button = document.querySelector('button');
let result = document.querySelector('.result');
let numberofquestions = correctAnswers.length;
button.addEventListener('click', () => {
    console.log(correctAnswers)
    let correctanswercount = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i].checked) { correctanswercount += 1; }
    }
    result.textContent = `${correctanswercount}/${numberofquestions}`;
})