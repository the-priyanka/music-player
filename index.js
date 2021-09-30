let image = document.querySelector("img")
let title = document.getElementById("title")
let artist = document.getElementById("artist")
let music = document.querySelector("audio")
let prevBtn = document.getElementById("prev")
let playBtn = document.getElementById("play")
let nextBtn = document.getElementById("next")

// Music 
let songs = [
  {
    name: "m1",
    displayName: "Nain",
    artist: "Badshah"
  },
  {
    name: "m2",
    displayName: "laagi lagan shankara ",
    artist: "	Hansraj Raghuvanshi ,"
  },
  {
    name: "m3",
    displayName: " Ek Hazaaron Mein Meri Behna Hai",
    artist: "Shreya Ghoshal"
  },
  {
    name: "m4",
    displayName: "Mera Bhai Tu",
    artist: "Naved Shaikh, Mr. Sohu"
  },
]

// check if play 
let isPlaying = false

// play 
function playSong() {
  isPlaying = true
  playBtn.classList.replace("fa-play", "fa-pause")
  playBtn.setAttribute("title", "pause")
  music.play()
}

// pause 
function pauseSong() {
  isPlaying = false
  playBtn.classList.replace("fa-pause", "fa-play")
  playBtn.setAttribute("title", "play")
  music.pause()
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()))
