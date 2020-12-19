

function randomValues() {
    anime({
        targets: '#hamburger path',
        translateX: function () {
            return anime.random(-25, 25);
        },
        easing: 'easeInOutQuad',
        delay: function (el, i, l) {
            return i * 600
        },
        duration: 750,
        direction: 'alternate',
        autoplay: true,
        loop: true,
        complete: randomValues
    })
}