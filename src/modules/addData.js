const addData = async (user, score) => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4hUxjWxbhx8eZYEYlSSm/scores/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
  const data = await res.json();
  return data.result;
};

export default addData;