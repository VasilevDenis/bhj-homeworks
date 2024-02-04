const clickerElement = document.getElementById('clicker__counter');
let counter = parseInt(clickerElement.textContent);
const imageElement = document.getElementById('cookie')
let width = parseInt(imageElement.width)
resizing = false
imageElement.addEventListener('click', () => {
  counter ++;
  clickerElement.textContent = counter;
  resizing = !resizing;
  if (resizing) {
    width += 20;
  } else {
    width -= 20;
  }
  imageElement.style.width = width + 'px';
});