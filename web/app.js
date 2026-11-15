
(function () {
    var playButton = document.getElementById("play");
    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");

    var trackTitle = document.querySelector(".track-info h2");
    var trackDescription = document.querySelector(".track-info p");
    var status = document.querySelector(".status");

    var playing = false;

    function updatePlayer() {
        if (playing) {
            playButton.innerHTML = "Ⅱ";
            status.innerHTML = "PLAYER ATIVO";
        } else {
            playButton.innerHTML = "▶";
            status.innerHTML = "PLAYER PAUSADO";
        }
    }

    playButton.onclick = function () {
        playing = !playing;
        updatePlayer();
    };

    previousButton.onclick = function () {
        trackTitle.innerHTML = "Faixa anterior";
        trackDescription.innerHTML = "Aguardando biblioteca musical";
    };

    nextButton.onclick = function () {
        trackTitle.innerHTML = "Próxima faixa";
        trackDescription.innerHTML = "Aguardando biblioteca musical";
    };

    document.onkeydown = function (event) {
        event = event || window.event;

        if (event.keyCode == 13 || event.keyCode == 32) {
            playing = !playing;
            updatePlayer();
        }
    };

})();
