const countdownElement = document.getElementById('timer');
let count = parseInt(countdownElement.textContent);
const countdownInterval = setInterval(() => {
  count--;
  countdownElement.textContent = count;
  if (count === 0) {
    clearInterval(countdownInterval);
    alert('Вы выиграли!')
  }
}, 1000);