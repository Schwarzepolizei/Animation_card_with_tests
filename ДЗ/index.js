const buyButtons = document.querySelector('#button1');

const modal = document.querySelector('.modal');

const form = modal.querySelector('form');

const formFirst = document.getElementById('quiz-form')

buyButtons.onclick = () => {
  modal.style.display = 'block';
  formFirst.style.display = 'block'
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const answers = Array.from(form.querySelectorAll('input[type="radio"]:checked'))
                      .map(input => input.value);

  console.log("Ваши варианты ответов:")
  console.log(answers);
  modal.style.display = 'none';
  formFirst.style.display = 'none'
});


const buyButtons2 = document.querySelector('#button2');

const modal2 = document.querySelector('.modal');

const form2 = modal.querySelector('#quiz-form2');

const formFirst2 = document.getElementById('quiz-form2')

buyButtons2.onclick = () => {
  modal2.style.display = 'block';
  formFirst2.style.display = 'block'
}

form2.addEventListener('submit', event => {
  event.preventDefault();


  const answers2 = Array.from(form2.querySelectorAll('input[type="radio"]:checked'))
                      .map(input => input.value);

  console.log("Ваши варианты ответов:")
  console.log(answers2);

  modal2.style.display = 'none';
  formFirst2.style.display = 'none'
});

const buyButtons3 = document.querySelector('#button3');

const modal3 = document.querySelector('.modal');

const form3 = modal.querySelector('#quiz-form3');

const formFirst3 = document.getElementById('quiz-form3')

buyButtons3.onclick = () => {
  modal3.style.display = 'block';
  formFirst3.style.display = 'block'
}

form3.addEventListener('submit', event => {
  event.preventDefault();


  const answers3 = Array.from(form3.querySelectorAll('input[type="radio"]:checked')) /* Исправить*/
                      .map(input => input.value);

  console.log("Ваши варианты ответов:")
  console.log(answers3);

  modal3.style.display = 'none';
  formFirst3.style.display = 'none'
});

const buyButtons4 = document.querySelector('#button4');
const modal4 = document.querySelector('.modal');
const form4 = modal4.querySelector('#quiz-form4');
const formFirst4 = document.getElementById('quiz-form4')

buyButtons4.onclick = () => {
  modal4.style.display = 'block';
  formFirst4.style.display = 'block'
}

form4.addEventListener('submit', event => {
  event.preventDefault();

  const answers4 = Array.from(form4.querySelectorAll('input[type="radio"]:checked'))
    .map(input => input.value);

  console.log("Ваши варианты ответов:")  
  console.log(answers4);

  modal4.style.display = 'none';
  formFirst4.style.display = 'none'
});

const buyButtons5 = document.querySelector('#button5');
const modal5 = document.querySelector('.modal');
const form5 = modal5.querySelector('#quiz-form5');
const formFirst5 = document.getElementById('quiz-form5')

buyButtons5.onclick = () => {
  modal5.style.display = 'block';
  formFirst5.style.display = 'block'
}

form5.addEventListener('submit', event => {
  event.preventDefault();

  const answers5 = Array.from(form5.querySelectorAll('input[type="radio"]:checked'))
    .map(input => input.value);

  console.log("Ваши варианты ответов:")
  console.log(answers5);

  modal5.style.display = 'none';
  formFirst5.style.display = 'none'
});


