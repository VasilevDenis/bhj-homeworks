document.addEventListener('DOMContentLoaded', function() {
  const rotatorCases = document.getElementsByClassName('rotator__case');
  let currentCaseIndex = 0;

  function rotateCases() {
      for (let i = 0; i < rotatorCases.length; i++) {
          rotatorCases[i].style.display = 'none';
      }
      rotatorCases[currentCaseIndex].style.display = 'inline';
      currentCaseIndex = (currentCaseIndex + 1) % rotatorCases.length;
      setTimeout(rotateCases, 1000);
  }
  rotateCases();
});
