function openCard() {
  document.querySelector('.container').classList.add('hidden');
  document.getElementById('card').classList.remove('hidden');
  document.getElementById('bgSong').play();
}