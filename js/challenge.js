// Add event Listener and Increment timer every second
document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter'),
        count = parseInt(counter.innerText),
        timer = setInterval(() => counter.innerText = ++count, 1000);
// To manually Increment and Decrement the Counter by clicking the plus/minus buttons
    document.getElementById('plus').addEventListener('click', () => counter.innerText = ++count);
    document.getElementById('minus').addEventListener('click', () => counter.innerText = --count);
//  To enable adding

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

  