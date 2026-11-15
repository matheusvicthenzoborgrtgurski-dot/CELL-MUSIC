
(function () {
    var fileInput = document.getElementById("musicFile");
    var audio = document.getElementById("audioPlayer");

    var playButton = document.getElementById("play");
    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");

    var trackTitle = document.querySelector(".track-info h2");
    var trackDescription = document.querySelector(".track-info p");
    var status = document.querySelector(".status");
    var progressLine = document.querySelector(".progress-line");
    var playlistElement = document.getElementById("playlist");

    var playlist = [];
    var currentIndex = -1;
    var currentURL = null;

    function updateStatus() {
        if (audio.paused) {
            playButton.innerHTML = "▶";
            status.innerHTML = "PLAYER PAUSADO";
        } else {
            playButton.innerHTML = "Ⅱ";
            status.innerHTML = "REPRODUZINDO";
        }
    }

    function updatePlaylist() {
        playlistElement.innerHTML = "";

        if (playlist.length === 0) {
            var empty = document.createElement("p");
            empty.className = "empty-message";
            empty.appendChild(
                document.createTextNode("Sua biblioteca está vazia.")
            );
            playlistElement.appendChild(empty);
            return;
        }

        for (var i = 0; i < playlist.length; i++) {
            var item = document.createElement("div");
            item.className = "playlist-item";

            if (i === currentIndex) {
                item.className += " selected";
            }

            item.appendChild(
                document.createTextNode(playlist[i].name)
            );

            item.setAttribute("data-index", i);

            item.onclick = function () {
                playTrack(parseInt(this.getAttribute("data-index"), 10));
            };

            playlistElement.appendChild(item);
        }
    }

    function playTrack(index) {
        if (index < 0 || index >= playlist.length) {
            return;
        }

        if (typeof URL === "undefined" ||
            typeof URL.createObjectURL !== "function") {
            status.innerHTML = "ARQUIVO NAO SUPORTADO";
            trackDescription.innerHTML = "Este navegador não suporta arquivos locais.";
            return;
        }

        currentIndex = index;

        if (currentURL) {
            URL.revokeObjectURL(currentURL);
        }

        currentURL = URL.createObjectURL(playlist[index]);

        audio.src = currentURL;
        audio.load();

        trackTitle.innerHTML = playlist[index].name;
        trackDescription.innerHTML = "CELL MUSIC • Arquivo local";

        progressLine.style.width = "0%";

        updatePlaylist();
        audio.play();
    }

    fileInput.addEventListener("change", function () {
        playlist = [];
        currentIndex = -1;

        var files = fileInput.files;

        for (var i = 0; i < files.length; i++) {
            if (!files[i].type ||
                files[i].type.indexOf("audio/") === 0) {
                playlist.push(files[i]);
            }
        }

        updatePlaylist();

        if (playlist.length > 0) {
            playTrack(0);
        } else {
            trackTitle.innerHTML = "Nenhuma música";
            trackDescription.innerHTML = "Selecione um arquivo de áudio";
            status.innerHTML = "BIBLIOTECA VAZIA";
        }
    });

    playButton.onclick = function () {
        if (playlist.length === 0) {
            trackDescription.innerHTML = "Adicione uma música primeiro";
            return;
        }

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    previousButton.onclick = function () {
        if (playlist.length > 0) {
            var previous = currentIndex - 1;

            if (previous < 0) {
                previous = playlist.length - 1;
            }

            playTrack(previous);
        }
    };

    nextButton.onclick = function () {
        if (playlist.length > 0) {
            var next = currentIndex + 1;

            if (next >= playlist.length) {
                next = 0;
            }

            playTrack(next);
        }
    };

    audio.addEventListener("play", updateStatus);
    audio.addEventListener("pause", updateStatus);

    audio.addEventListener("ended", function () {
        if (playlist.length > 1) {
            var next = currentIndex + 1;

            if (next >= playlist.length) {
                next = 0;
            }

            playTrack(next);
        } else {
            updateStatus();
        }
    });

    audio.addEventListener("timeupdate", function () {
        if (audio.duration > 0) {
            var percentage =
                (audio.currentTime / audio.duration) * 100;

            progressLine.style.width = percentage + "%";
        }
    });

    audio.addEventListener("error", function () {
        status.innerHTML = "ERRO NO AUDIO";
    });

    updatePlaylist();
    updateStatus();

})();
