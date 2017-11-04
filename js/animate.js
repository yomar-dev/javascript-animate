const $circulo = document.getElementById('circulo');

// element.animate(keyframes = [], options = {})
const animation = $circulo.animate([
	//from
	{
		transform: 'translateX(0)'
	},
	//to
	{
		transform: 'translateX(500px)'
	}
], {
	duration: 1000,
	delay: 1000,
	direction: 'normal',
	easing: 'linear',
	iterations: Infinity,
	fill: 'forwards',
	iterationsStart: .5,
	//endDelay: 5000
})

const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');
const $stopButton = document.getElementById('stop');
const $reverseButton = document.getElementById('reverse');