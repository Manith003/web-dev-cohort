const audioPlayer = document.getElementById("audioPlayer");
let songTitle = document.getElementById("song-title");
let songArtist = document.getElementById("song-artist");
let overlay = document.querySelector(".overlay");
let burger = document.querySelector(".burger");
let songsList = document.querySelector("ul");



class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentTrackIndex = 0;
  }
  addSong(song) {
    this.playlist.push(song);
  }
  listAllSongs() {
    return this.playlist.forEach(function (song, index) {
      console.log(`${index + 1}. ${song.title} by ${song.artist}`);
    });
  }
  showCurrentTrack() {
    if (this.playlist.length === 0) {
      console.log("No songs in the playlist.");
      return;
    }
    const currentTrack = this.playlist[this.currentTrackIndex];
    console.log(`Now playing: ${currentTrack.title} by ${currentTrack.artist}`);
  }
  play() {
    if (this.playlist.length === 0) return console.log("No songs to play.");
    const currentTrack = this.playlist[this.currentTrackIndex];
    audioPlayer.src = currentTrack.audioFile;
    audioPlayer.play();
  }
  pause() {
    audioPlayer.pause();
  }
}

class Song {
  constructor(title, artist, audioFile) {
    this.title = title;
    this.artist = artist;
    this.audioFile = audioFile;
  }
}

const spotify = new MusicPlayer();
let song1 = new Song(
  "Cry For Me",
  "The Weeknd",
  "songs/The Weeknd - Cry For Me (Audio).mp3"
);
let song2 = new Song(
    "Timeless",
    "The Weeknd",
    "songs/Timeless  Spider-Verse.mp3"  
);

let song3 = new Song(
    "blinding lights",
    "The Weeknd",
    "songs/The Weeknd - Blinding Lights (Official Video).mp3"
);

spotify.addSong(song1);
spotify.addSong(song2);
spotify.addSong(song3);

function loadAudio() {
  songTitle.textContent = spotify.playlist[spotify.currentTrackIndex].title;
  songArtist.textContent = spotify.playlist[spotify.currentTrackIndex].artist;
}
loadAudio();

document.getElementById("play").addEventListener("click", () => {
  spotify.play();
});

document.getElementById("pause").addEventListener("click", () => {
  spotify.pause();
});

document.getElementById("next").addEventListener("click", () => {
    if (spotify.currentTrackIndex < spotify.playlist.length - 1) {
        spotify.currentTrackIndex++;
    } else {
        spotify.currentTrackIndex = 0; // Loop back to the first song
    }
    loadAudio();
    spotify.play();
});

document.getElementById("prev").addEventListener("click", () => {
    if (spotify.currentTrackIndex > 0) {
        spotify.currentTrackIndex--;
    } else {
        spotify.currentTrackIndex = spotify.playlist.length - 1; // Loop to the last song
    }
    loadAudio();
    spotify.play();
})

const progressBar = document.getElementById("progressBar");

audioPlayer.addEventListener("timeupdate", () => {
  if (!isNaN(audioPlayer.duration)) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
  }
});

// Allow user to seek by dragging the slider
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
});


burger.addEventListener("click", () => {
    overlay.classList.toggle("active");
    burger.classList.toggle("active");

    songsList.innerHTML = '';
     spotify.playlist.forEach(song => {
         const li = document.createElement("li");
        li.innerHTML = `${song.title} by ${song.artist}`;
        songsList.appendChild(li);
    });

})


overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    burger.classList.remove("active");

    

    
})