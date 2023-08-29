let masterplay = document.getElementById("masterplay");
let rangebar = document.getElementById("range-input");
let mysong = new Audio("allsongs/1.mp3");
let songname2 = document.getElementsByClassName("song-name2");
let mastersongname = document.getElementById("master-songname");
let songItems = Array.from(document.getElementsByClassName('song-item'));
let index = 0;

let allsongs = [
    { songname: "Bant Raha Tha Jab Khuda _", filepath: "allsongs/1.mp3", songscover: "covers/1.jpg" },
    { songname: "Dil Aaj Kal (Video Song) _", filepath: "allsongs/2.mp3", songscover: "covers/2.jpg" },
    { songname: "Inj Vichre Mur Nahi Aaye", filepath: "allsongs/3.mp3", songscover: "covers/3.jpg" },
    { songname: "Mujh Maaf Shaaf Seekhao", filepath: "allsongs/4.mp3", songscover: "covers/4.jpg" },
    { songname: "Na Mera Ban Saka Hai Tu", filepath: "allsongs/5.mp3", songscover: "covers/5.jpg" },
    { songname: "Remix Shab e wada awal", filepath: "allsongs/6.mp3", songscover: "covers/6.jpg" }
];
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = allsongs[i].songscover;
    element.getElementsByClassName("song-name")[0].innerText = allsongs[i].songname;
});

masterplay.addEventListener("click", () => {
    if (mysong.paused || mysong.currentTime <= 0) {
        mysong.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle")
        document.getElementById("play-gif").style.width = "50px";
    }
    else {
        mysong.pause();
        masterplay.classList.remove("fa-pause-circle")
        masterplay.classList.add("fa-play-circle");
        document.getElementById("play-gif").style.width = "0px";
    }
});

mysong.addEventListener("timeupdate", () => {
    progress = parseInt((mysong.currentTime / mysong.duration) * 100);
    rangebar.value = progress;
});

rangebar.addEventListener("change", () => {
    mysong.currentTime = rangebar.value * mysong.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('allsongsplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('allsongsplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // Check if the clicked element has the 'fa-play-circle' class
        if (e.target.classList.contains('fa-play-circle')) {
            makeAllPlays();

            index = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            mastersongname.innerText = allsongs[index].songname;
            mysong.src = `allsongs/${index + 1}.mp3`;
            mysong.currentTime = 0;
            mysong.play();
            document.getElementById("play-gif").style.width = "50px";
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        } else {
            mysong.pause();

            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            document.getElementById("play-gif").style.width = "0"; // Set width to 0 for pause
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
        }
    });
});


document.getElementById('forward').addEventListener('click', () => {
    if (index >= 5) {
        index = 0;
    }
    else {
        index += 1;
    }

    mastersongname.innerText = allsongs[index].songname;
    mysong.src = `allsongs/${index + 1}.mp3`;
    mysong.currentTime = 0;
    mysong.play();
    document.getElementById("play-gif").style.width = "50px";
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

});

document.getElementById('backward').addEventListener('click', () => {
    if (index <= 0) {
        index = 0
    }
    else {
        index -= 1;
    }
    mastersongname.innerText = allsongs[index].songname;
    mysong.src = `allsongs/${index + 1}.mp3`;
    mysong.currentTime = 0;
    mysong.play();
    document.getElementById("play-gif").style.width = "50px";
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});