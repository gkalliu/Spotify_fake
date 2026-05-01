// ============================
// ELEMENTOS DO PLAYER
// ============================

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const volume = document.getElementById("volume");

const cover = document.getElementById("cover");
const title = document.getElementById("music-title");
const artist = document.getElementById("music-artist");


// ============================
// FUNÇÃO GLOBAL DE TOCAR MÚSICA
// ============================

function playMusic(music) {

    audio.src = music.audio || music.file;
    audio.play();

    cover.src = music.image;
    title.textContent = music.name;
    artist.textContent = music.artist; // 🔥 resolve seu problema

    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}


// ============================
// PLAY / PAUSE
// ============================

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;

    }else{

        audio.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

    }

});


// ============================
// BARRA DE PROGRESSO
// ============================

audio.addEventListener("timeupdate", () => {

    const { currentTime, duration } = audio;

    progress.max = duration;
    progress.value = currentTime;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);

});


// ============================
// MUDAR POSIÇÃO
// ============================

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});


// ============================
// VOLUME
// ============================

if(volume){
    volume.addEventListener("input", () => {
        audio.volume = volume.value;
    });
}


// ============================
// FORMATAR TEMPO
// ============================

function formatTime(time){

    if(!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}


// ============================
// NEXT / PREV (placeholder)
// ============================

nextBtn.addEventListener("click", () => {
    console.log("Próxima música");
});

prevBtn.addEventListener("click", () => {
    console.log("Música anterior");
});