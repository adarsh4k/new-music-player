document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progressBar = document.getElementById("progressBar");
    const volumeSlider = document.getElementById("volumeSlider");
    const songInfo = document.getElementById("songInfo");

    let playlist = [
        { title: "Brahmotsavam", src: "https://sencloud.online/mp3/Telugu%20Mp3/2016/Brahmotsavam(2016)/Brahmotsavam(SenSongsMp3.Com).mp3" },
        { title: "Aata Paatalaadu", src: "https://sencloud.online/mp3/Telugu%20Mp3/2016/Brahmotsavam(2016)/Aata%20Paatalaadu(SenSongsMp3.Com).mp3" },
        { title: "Gopikamma", src: "https://sencloud.online/mp3/Telugu%20Mp3/old/Telugu%202014/107%20-%20Mukunda%20(2014)/04%20-%20Gopikamma.mp3" },
        {title: "needhe needhe", src:"https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna/Needhe%20Needhe.mp3"},
        {title:"Adiga", src:"https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna/Adigaa.mp3"},
        {title:"Ammadi", src:"https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna%20-%20HQ/Ammaadi.mp3"},
        {title:"Enno Enno",src:"https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna/Enno%20Enno.mp3"},
        {title:"Rangde",src:"https://sencloud.online/mp3/Telugu%20Mp3/2016/A%20AA%20(2016)/2-Rang%20De-SenSongsMp3.Co.mp3"},
        {title:"Nee navve",src:"https://sencloud.online/mp3/Telugu%20Mp3/2015/Soggade%20Chinni%20Nayana%20(2015)/2-Nee%20Navve-SenSongsMp3.Co.mp3"},
        {title:"Untale", src:"https://sencloud.online/mp3/Telugu%20Mp3/2015/Soggade%20Chinni%20Nayana%20(2015)/4-Untale%20Untale%20Nee%20Vente%20Untale-SenSongsMp3.Co.mp3"},
        {title:"Nijanga Nenena",src:"https://sencloud.online/mp3/Telugu%20Mp3/atoz/2000to2009/K/Kotta%20Bangaru%20Lokam%20(2008)/02%20-%20Nijanga%20Nenena%20%20-%20SenSongsMp3.co.mp3"},
        {title:"Nenani",src:"https://sencloud.online/mp3/Telugu%20Mp3/atoz/2000to2009/K/Kotta%20Bangaru%20Lokam%20(2008)/04%20-%20Nenai%20Neevani%20%20-%20SenSongsMp3.co.mp3"},
        {title:"Emundo",src:"https://sencloud.online/mp3/Telugu%20Mp3/old/Telugu%202012/50%20-%20Life%20Is%20Beautiful%20(2012)/Beautiful%20Girl%20-%20SenSongsmp3.Co.mp3"},
        {title:"Atu itu ooguthu",src:"https://sencloud.online/mp3/Telugu%20Mp3/old/Telugu%202012/50%20-%20Life%20Is%20Beautiful%20(2012)/Beautiful%20Girl%20-%20SenSongsmp3.Co.mp3"},
        {title:"Sumagandhala",src:"https://sencloud.online/mp3/Telugu%20Mp3/old/Telugu%202015/51%20-%20Kerintha%20(2015)/Sumagandhaala%20-%20SenSongsmp3.Co.mp3"},
        {title:"Mila mila",src:"https://sencloud.online/mp3/Telugu%20Mp3/old/Telugu%202015/51%20-%20Kerintha%20(2015)/Mila%20Mila%20-%20SenSongsmp3.Co.mp3"},
        {title:"Modalaudham",src:"https://mp3teluguwap.net/hq/2018/Sreenivasa%20Kalyanam/Srinivasa%20Kalyanam%20(2018)%20-%20320kbps/04%20-%20Modalaudaam%20-%20SenSongsMp3.Co.mp3"},
        {title:"Mellaga Thellarindoi",src:"https://sencloud.online/mp32/mp3/Shatamanam%20Bhavati%20(2016)/Mellaga%20Tellarindoi%20-%20SenSongsMp3.Co.mp3"},
        {title:"Nilavade",src:"https://sencloud.online/mp32/mp3/Shatamanam%20Bhavati%20(2016)/Nilavade%20-%20SenSongsMp3.Co.mp3"},
        {title:"Shathamanam bhavathi",src:"https://sencloud.online/mp32/mp3/Shatamanam%20Bhavati%20(2016)/Shatamanam%20Bhavati%20-%20SenSongsMp3.Co.mp3"},
        {title:"Oka thotalo",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Gangothri(2003)/Oka%20Thotalo-SenSongsMp3.Com.mp3"},
        {title:"Ganga",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Gangothri(2003)/Ganga-SenSongsMp3.Com.mp3"},
        {title:"Chali chaliga",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Prabash/Mr%20Perfect%282011%29/Chali%20Chaliga-SenSongsMp3.Co.mp3"},
        {title:"Mooga manasulu",src:"https://mp3teluguwap.net/hq/2018/Mahanati%20(2018)/Mooga%20Manasulu%20-%20SenSongsMp3.Co.mp3"},
        {title:"yevari adaganu",src:"https://mp3teluguwap.net/mp3/2022/Sita%20Ramam%20(2022)/Yevarini%20Adaganu.mp3"},
        {title:"oh sita",src:"https://mp3teluguwap.net/mp3/2022/Sita%20Ramam%20(2022)/Oh%20Sita%20Hey%20Rama.mp3"},
        {title:"kaanunna Kalyanam",src:"https://mp3teluguwap.net/mp3/2022/Sita%20Ramam%20(2022)/Oh%20Sita%20Hey%20Rama.mp3"},
        {title:"chiru chiru navvula",src:"https://mp3teluguwap.net/mp3/2019/Mr%20Majnu%20(2019)/Mr%20Majnu%20(2019)%20-%20HQ/Chiru%20Chiru%20Navvula%20-%20SenSongsMp3.Co.mp3"},
        {title:"oka life",src:"https://sencloud.online/mp3/Telugu%20Mp3/2016/Oopiri(2016)/Oka%20Life(SenSongsMp3.Com).mp3"},
        {title:"Eppudu",src:"https://sencloud.online/mp3/Telugu%20Mp3/2016/Oopiri(2016)/Eppudu(SenSongsMp3.Com).mp3"},
        {title:"Piliche",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Khaleja%282010%29/Pileche-SenSongsMp3.Co.mp3"},
        {title:"Jolaale",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Ravi%20Teja/files/Vikramarkudu%282006%29/Jolaalee-SenSongsMp3.Co.mp3"},
        {title:"Seethamma vakitlo sirimalle chettu",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Seethamma%20Vakitlo%20Sirimalle%20Chettu%282013%29/Seethamma%20Vakitlo%20Sirimalle%20Chettu-SenSongsMp3.Co.mp3"},
        {title:"Meghallo",src:"https://sencloud.online/mp3/Telugu%20Mp3/All/Seethamma%20Vakitlo%20Sirimalle%20Chettu%282013%29/Meghaallo-SenSongsMp3.Co.mp3"},
        
    ];

    let currentSongIndex = 0;
    function loadSong() {
        audio.src = playlist[currentSongIndex].src;
        songInfo.textContent = playlist[currentSongIndex].title;
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "Play";
        }
    }

    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong();
        playPause();
    }

    function playPrev() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong();
        playPause();
    }

    function updateProgressBar() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + "%";
    }

    function updateVolume() {
        audio.volume = volumeSlider.value;
    }

    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", playNext);
    playPauseBtn.addEventListener("click", playPause);
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrev);
    volumeSlider.addEventListener("input", updateVolume);

    loadSong();
});
