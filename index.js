"use strict"

window.addEventListener('keydown', function(e) {

	const aud = document.querySelector(`audio[data-key="${e.key}"]`);
	if(!aud) return
	aud.currentTime = 0;
	aud.play();
	const el = document.querySelector(`.key[data-key="${e.key}"]`);
	el.classList.add('keyDown');

})

function removeTrans(ev) {
	if(ev.propertyName !== 'transform') return
	ev.target.classList.remove('keyDown');
}

const keys = document.querySelectorAll('.key');

keys.forEach(item => item.addEventListener('transitionend', removeTrans))
