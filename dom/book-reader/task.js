document.addEventListener('click', function(event) {
  event.preventDefault(); 
  if (event.target.classList.contains('font-size')) {
    document.querySelectorAll('.font-size').forEach(element => {
      element.classList.remove('font-size_active');
    });
    event.target.classList.add('font-size_active');
    const bookElement = document.querySelector('.book');
    bookElement.classList.remove('book_fs-small', 'book_fs-big');
    const fontSize = event.target.getAttribute('data-size');
    if (fontSize === 'small') {
      bookElement.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      bookElement.classList.add('book_fs-big');
    }
  }
});
