document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('main-audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progress = document.getElementById('progress');
    const volume = document.getElementById('volume');
    const currentTimeElem = document.getElementById('current-time');
    const durationElem = document.getElementById('duration');
  
    let isPlaying = false;
    let currentSongIndex = 0;
    let playlistSongs = [];
    
    if (window.playlistData) {
      playlistSongs = window.playlistData.songs;
      const firstSong = window.firstSongData?.url;
      if (firstSong) {
        updateAudioPlayer_a(firstSong);
      }
    }
  
    function updateAudioPlayer_a(songUrl) {
      audioPlayer.src = songUrl;
      audioPlayer.play();
      isPlaying = true;
      playPauseBtn.textContent = 'Pause';
      savePlayerState();
    }
  
    function updateTime() {
      const currentTime = audioPlayer.currentTime;
      const duration = audioPlayer.duration;
      currentTimeElem.textContent = formatTime(currentTime);
      durationElem.textContent = ` / ${formatTime(duration)}`;
      progress.value = (currentTime / duration) * 100;
    }
  
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  
    function loadPlayerState() {
      const savedUrl = localStorage.getItem('audioUrl');
      const savedTime = localStorage.getItem('audioTime');
      const savedVolume = localStorage.getItem('audioVolume');
      const savedIsPlaying = localStorage.getItem('audioIsPlaying') === 'true';
  
      if (savedUrl) {
        audioPlayer.src = savedUrl;
        audioPlayer.currentTime = savedTime ? parseFloat(savedTime) : 0;
        audioPlayer.volume = savedVolume ? parseFloat(savedVolume) : 1;
        isPlaying = savedIsPlaying;
        if (isPlaying) {
          audioPlayer.play();
          playPauseBtn.textContent = 'Pause';
        } else {
          playPauseBtn.textContent = 'Play';
        }
      }
    }
  
    function savePlayerState() {
      localStorage.setItem('audioUrl', audioPlayer.src);
      localStorage.setItem('audioTime', audioPlayer.currentTime);
      localStorage.setItem('audioVolume', audioPlayer.volume);
      localStorage.setItem('audioIsPlaying', isPlaying);
    }
  
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
      } else {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
      }
      isPlaying = !isPlaying;
      savePlayerState();
    });
  
    prevBtn.addEventListener('click', () => {
      if (playlistSongs.length > 0) {
        currentSongIndex = (currentSongIndex - 1 + playlistSongs.length) % playlistSongs.length;
        const prevSongUrl = playlistSongs[currentSongIndex].url;
        updateAudioPlayer(prevSongUrl);
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (playlistSongs.length > 0) {
        currentSongIndex = (currentSongIndex + 1) % playlistSongs.length;
        const nextSongUrl = playlistSongs[currentSongIndex].url;
        updateAudioPlayer(nextSongUrl);
      }
    });
  
    progress.addEventListener('input', () => {
      const seekTime = (progress.value / 100) * audioPlayer.duration;
      audioPlayer.currentTime = seekTime;
      savePlayerState();
    });
  
    volume.addEventListener('input', () => {
      audioPlayer.volume = volume.value;
      savePlayerState();
    });
  
    setInterval(savePlayerState, 1000);
  
    audioPlayer.addEventListener('timeupdate', updateTime);
  
    loadPlayerState();
  
    document.querySelectorAll('a[data-page]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        if (page === 'next') {
          nextBtn.click();
        } else if (page === 'prev') {
          prevBtn.click();
        }
      });
    });
  });
  