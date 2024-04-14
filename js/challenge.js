document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById('counter');
  let count = parseInt(counter.innerText);
  let timer = setInterval(() => counter.innerText = ++count, 1000);
  let isPaused = false;
  let likes = {};

  // Function to update likes display
  function updateLikes() {
    let likesList = document.querySelector('.likes');
    likesList.innerHTML = '';
    for (let num in likes) {
      let li = document.createElement('li');
      li.innerText = `${num} has ${likes[num]} likes`;
      likesList.appendChild(li);
    }
  }

  // Event listener for plus button
  document.getElementById('plus').addEventListener('click', () => {
    if (!isPaused) {
      counter.innerText = ++count;
    }
  });

  // Event listener for minus button
  document.getElementById('minus').addEventListener('click', () => {
    if (!isPaused) {
      counter.innerText = --count;
    }
  });

  // Event listener for like button
  document.getElementById('heart').addEventListener('click', () => {
    if (!isPaused) {
      let currentCount = counter.innerText;
      if (!likes[currentCount]) {
        likes[currentCount] = 1;
      } else {
        likes[currentCount]++;
      }
      updateLikes();
    }
  });

  // Event listener for pause button
  document.getElementById('pause').addEventListener('click', () => {
    if (!isPaused) {
      clearInterval(timer);
      isPaused = true;
      document.getElementById('pause').innerText = 'Resume';
      // Disable all buttons except pause button
      document.getElementById('plus').disabled = true;
      document.getElementById('minus').disabled = true;
      document.getElementById('heart').disabled = true;
    } else {
      timer = setInterval(() => counter.innerText = ++count, 1000);
      isPaused = false;
      document.getElementById('pause').innerText = 'Pause';
      // Enable all buttons
      document.getElementById('plus').disabled = false;
      document.getElementById('minus').disabled = false;
      document.getElementById('heart').disabled = false;
    }
  });

  // Event listener for comment submission
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let comment = this.comment.value;
    let div = document.getElementById('list');
    let p = document.createElement('p');
    p.innerText = comment;
    div.appendChild(p);
    this.reset();
  });

});
