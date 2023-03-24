import './style.css';
import addData from './modules/addData.js';

// Get score data from API endpoint
const getData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OhdtT0dFv50nLaIMDOe2/scores/');
  const data = await res.json();
  return data.result;
};

// Display score data on the page
const displayScore = (data) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  data = data.sort((a, b) => b.score - a.score);
  data.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.innerHTML = `${user} : ${score}`;
    scores.appendChild(li);
  });
};

// Refresh score data on button click
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', async () => {
  const data = await getData();
  displayScore(data);
});

// Add new score data on form submission
const form = document.querySelector('.form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { user, score } = form.elements;
  await addData(user.value, score.value);
  form.reset();
});