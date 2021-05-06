if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const Plyr = require('plyr');
    const players = Array.from(document.querySelectorAll('.js-player')).map(
        p => new Plyr(p)
    );
    players.forEach(player => {
        player.on('play', () => {
            player.elements.container.classList.add('player-expand');
            players.forEach(otherPlayer => {
            if (otherPlayer !== player && otherPlayer.playing) {
                otherPlayer.pause();
            }
            });
            // player.toggleControls('progress');
        });
        player.on('pause', () => {
            if (!player.seeking) {
                player.elements.container.classList.remove('player-expand');
            }
        });
    });

    // When play button clicked - find and show the closest player.
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(playButton => {
        playButton.addEventListener('click', event => {
            event.preventDefault();
            console.log(playButton.parentNode.querySelector('.js-player'));
            const player = playButton.parentNode.querySelector('.plyr');
            player.style.display = 'block';
            playButton.style.opacity = 0;
        });
    });
}
