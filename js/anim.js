var circles__left = anime.timeline({
    targets: '.circles_left',
    delay: function (el, i) { return i * 200 },
    duration: 2000, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: true // Is not inherited
});
circles__left

    .add({
        targets: '.circles_1', background: '#ee6417'
    })
    .add({
        targets: '.circles_2', background: "#f7343e"
    })
    .add({
        targets: '.circles_3', background: "#235e34"
    })
    .add({
        targets: '.circles_4', background: "#719fad"
    })
    .add({
        targets: '.circles_5', background: "#f7343e"
    })
    .add({
        targets: '.circles_6', background: "#403939"
    })
    .add({
        targets: '.circles_7', background: "#fa7a81"
    });
var circles__right = anime.timeline({
    targets: '.circles_right',
    delay: function (el, i) { return i * 200 },
    duration: 2000, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: true // Is not inherited
});

circles__right

    .add({
        targets: '.circles_8', background: '#ee6417'
    })
    .add({
        targets: '.circles_9', background: "#f7343e"
    })
    .add({
        targets: '.circles_10', background: "#235e34"
    })
    .add({
        targets: '.circles_11', background: "#403939"
    })
    .add({
        targets: '.circles_12', background: "#fa7a81"
    });


