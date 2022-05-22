const sliderContainers = document.querySelectorAll('.range-slider');

const durationSlider = document.querySelector('.player__bar_type_duration');
const durationSliderTrack = durationSlider.querySelector('.range-slider__track');
const durationSliderThumb = durationSlider.querySelector('.range-slider__thumb');
const durationSliderProgress = durationSlider.querySelector('.range-slider__progress');

const volumeSliderElement = document.querySelector('.player__bar_type_volume');
const volumeSliderTrack = volumeSliderElement.querySelector('.range-slider__track');
const volumeSliderThumb = volumeSliderElement.querySelector('.range-slider__thumb');
const volumeSliderProgress = volumeSliderElement.querySelector('.range-slider__progress');

const media = document.querySelector('.player__media');
media.load();

const playButton = document.querySelector('.player__play-button');
const volumeButton = document.querySelector('.player__volume-button')
const fullscreenButton = document.querySelector('.player__fullscreen-button');

let percentOfMediaDuration = 0;
let isMediaLoaded = false;

function setVolume(value) {
  media.volume = value;
}

function toggleMedia() {
  if (media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

function updateThumbAndProgress(thumb, progress, value) {
  thumb.style.left = value + '%';
  progress.style.width = value + '%';
}

updateThumbAndProgress(durationSliderThumb, durationSliderProgress, 0);
updateThumbAndProgress(volumeSliderThumb, volumeSliderProgress, 100);

sliderContainers.forEach(sliderContainer => {
  const track = sliderContainer.querySelector('.range-slider__track');
  const thumb = sliderContainer.querySelector('.range-slider__thumb');
  const progress = sliderContainer.querySelector('.range-slider__progress');
  track.addEventListener('input', event => updateThumbAndProgress(thumb, progress, event.target.value));
});

media.addEventListener('loadeddata', () => {
  percentOfMediaDuration = media.duration / 100;
  isMediaLoaded = true;
})

durationSliderTrack.addEventListener('input',
  event => media.currentTime = event.target.value * percentOfMediaDuration);

volumeSliderTrack.addEventListener('input', () => setVolume(volumeSliderTrack.value / 100))

media.addEventListener('timeupdate', () => {
  if (isMediaLoaded) {
    const trackProgress = media.currentTime / percentOfMediaDuration;
    updateThumbAndProgress(durationSliderThumb, durationSliderProgress, trackProgress);
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
playButton.addEventListener('click', toggleMedia)
