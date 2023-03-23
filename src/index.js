import './style.css';
import addData from './modules/addData.js';

const getData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4hUxjWxbhx8eZYEYlSSm/scores/');
  const data = await res.json();
  return data.result;
};

const displayScore = (data) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  data.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.textContent = `${user}: ${score}`;
    scores.appendChild(li);
  });
};

const refreshWindow = async () => {
  const data = await getData();
  displayScore(data);
};

const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', () => {
  refreshWindow();
});

const form = document.querySelector('.form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { user, score } = form.elements;
  await addData(user.value, score.value);
  form.reset();
});
