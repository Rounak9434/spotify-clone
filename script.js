const songs = [
  { name: "Aaj Jaana", file: "aaa-Jaana.mp3", cover: "aaa.jpg" },
  { name: "Aankh Marey", file: "aankh-marey.mp3", cover: "aankh.jpg" },
  { name: "Afsos Karoge", file: "afsos-karoge.mp3", cover: "afsos.jpg" },
  { name: "Akh Lad Jaave", file: "akh-lad-jaave.mp3", cover: "akh.jpg" },
  { name: "Amma Dekh", file: "amma-dekh.mp3", cover: "amma.jpg" },
  { name: "Ankhiyaan Se Goli Mare", file: "ankhiyon-se-goli-mare.mp3", cover: "ankhiyon.jpg" },
  { name: "Asal Mein", file: "asal-mein.mp3", cover: "asal.jpg" },
  { name: "Badri Ki Dulhania", file: "badri-ki-dulhania.mp3", cover: "badri.jpg" },
  { name: "Bekhayali", file: "bekhayali.mp3", cover: "bekhayali.jpg" },
  { name: "Bimar Dil", file: "bimar-dil.mp3", cover: "bimar.jpg" },
  { name: "Brown Rang", file: "brown-rang.mp3", cover: "brown.jpg" },
  { name: "Buzz", file: "buzz.mp3", cover: "buzz.jpg" },
  { name: "Chahun Main Ya Naa", file: "chahun-main-ya-naa.mp3", cover: "chahun.jpg" },
  { name: "Chale Aana", file: "chale-aana.mp3", cover: "chale.jpg" },
  { name: "Galliyan", file: "galliyan.mp3", cover: "galliyan.jpg" },
  { name: "Rehnuma", file: "rehnuma.mp3", cover: "rehnuma.jpg" },
  { name: "Darkhaast", file: "darkhaast.mp3", cover: "darkhaast.jpg" },
  { name: "Hamdard", file: "hamdard.mp3", cover: "hamdard.jpg" },
  { name: "Cham Cham", file: "cham-cham.mp3", cover: "cham.jpg" }
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const list = document.getElementById("songList");

function loadSong(i) {
  title.innerText = songs[i].name;
  audio.src = "songs/" + songs[i].file;
  cover.src = "songs/" + songs[i].cover;
  highlight(i);
}

songs.forEach((song, i) => {
  const li = document.createElement("li");
  li.innerText = song.name;
  li.onclick = () => {
    index = i;
    loadSong(index);
    audio.play();
    playBtn.innerText = "⏸";
  };
  list.appendChild(li);
});

function highlight(i) {
  document.querySelectorAll(".playlist li").forEach((li, idx) => {
    li.classList.toggle("active", idx === i);
  });
}

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
};

nextBtn.onclick = () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
};

prevBtn.onclick = () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
};

audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

loadSong(index);
