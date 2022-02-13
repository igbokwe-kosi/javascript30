'use strict';

///todo (1. get our elements)
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenBtn = document.querySelector('.btn--fullscreen');

///todo (2. build how functions)

function togglePlay(e) {
  e.preventDefault();
  return video.paused ? video.play() : video.pause();
}

const updateButton = function (e) {
  e.preventDefault();
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
};

function skip(e) {
  e.preventDefault();
  if (!this.dataset.skip) return;
  video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate(e) {
  e.preventDefault();
  video[this.name] = this.value;
}

function handleProgressUpdate(e) {
  e.preventDefault();
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  e.preventDefault();
  // console.log(e, e.offsetX);

  const scrubTime = e.offsetX / progress.clientWidth;
  video.currentTime = scrubTime * video.duration;
  // progressBar.style.flexBasis = `${percent}%`;
}

function toggleFullscreen() {
  !document.fullscreenElement
    ? player.requestFullscreen()
    : document.exitFullscreen();
  // player.requestFullscreen();
}
///todo (3. hook up the event listeners)
video.addEventListener('click', togglePlay);
window.addEventListener('keypress', e => e.code === 'Space' && togglePlay());
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgressUpdate);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
progress.addEventListener('mouseout', () => (mousedown = false));
progress.addEventListener('mouseover', e => mousedown && scrub(e));

fullscreenBtn.addEventListener('click', toggleFullscreen);
