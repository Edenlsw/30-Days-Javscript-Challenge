function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function form running 
    audio.currentTime = 0; // rewind audio to start- can now play quicker keys
    audio.play();
    key.classList.add('playing')
  };
  

  function removeTransition (e) {
    if(e.propertyName !== 'transform') return; //skip if not a transform

    this.classList.remove('playing'); // should remove transition outer-no longer selected
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound) 