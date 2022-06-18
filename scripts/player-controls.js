const sliders = document.querySelectorAll('.range-slider');
const durationSlider = document.querySelector('.player__bar_type_duration');
const volumeSlider = document.querySelector('.player__bar_type_volume');

const media = document.querySelector('.player__media');
media.load();

const playButton = document.querySelector('.player__play-button');
const volumeButton = document.querySelector('.player__volume-button')
const fullscreenButton = document.querySelector('.player__fullscreen-button');

let percentOfMediaDuration = 0;
let isMediaLoaded = false;

function calculateBackgroundGradient(value) {
  return `-webkit-linear-gradient(left, #FF6600 0%, #FF6600 ${value}%, #9397A3 ${value}%, #9397A3)`
}

function setBackgroundGradientForSlider(slider, value) {
  slider.style.background = calculateBackgroundGradient(value);
}

function setVolume(value) {
  media.volume = value;
  volumeSlider.value = value * 100;
  setBackgroundGradientForSlider(volumeSlider, volumeSlider.value);
}

function initSliders() {
  setBackgroundGradientForSlider(durationSlider, 0);
  setBackgroundGradientForSlider(volumeSlider, 100);
}

function toggleMedia() {
  if (media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

media.addEventListener('loadeddata', () => {
  percentOfMediaDuration = media.duration / 100;
  isMediaLoaded = true;
});

sliders.forEach(slider =>
  slider.addEventListener('input', () => setBackgroundGradientForSlider(slider, slider.value)));

durationSlider.addEventListener('input', () => {
  media.currentTime = durationSlider.value * percentOfMediaDuration;
});

volumeSlider.addEventListener('input', () => setVolume(volumeSlider.value / 100));

media.addEventListener('timeupdate', () => {
  if (isMediaLoaded) {
    durationSlider.value = media.currentTime / percentOfMediaDuration;
    setBackgroundGradientForSlider(durationSlider, durationSlider.value)
  }
})

volumeButton.addEventListener('click', () => {
  if (volumeButton.classList.contains('muted')) {
    volumeButton.classList.remove('muted');
    setVolume(1);
  } else {
    volumeButton.classList.add('muted');
    setVolume(0);
  }
});
fullscreenButton.addEventListener('click', () => media.requestFullscreen());
media.addEventListener('click', toggleMedia);
playButton.addEventListener('click', toggleMedia);
initSliders();
