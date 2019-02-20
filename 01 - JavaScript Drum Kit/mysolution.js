// Function to play audio and transform the div
function playAudio(e) {
  const audioElm = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audioElm) return;
  audioElm.currentTime = 0;
  audioElm.play();
  const divElm = document.querySelector(`div[data-key="${e.keyCode}"]`);
  divElm.classList.add('playing');
}

// Function to remove the transform from the div
function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Add the event listeners
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  return key.addEventListener('transitionend', removeTransition);
});
document.querySelector('body').addEventListener('keydown', playAudio);