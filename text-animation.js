/**
 * This file contains relevant coding for the little "text flow" animation
 * in the bottom of the website.
 * Using two different setTimeout method, calling the method outAnimation()
 * will result in the input words being displayed with the animation at random.
 */

function outAnimation() {
    // The speed in which the letters are unfolding.
    const letterspeed = 100;
    // the speed in which new words appear randomly.
    const wordspeed = 1800;
    // Pre defined texts.
    const texts = ['Designs', 'Develops', 'Defines', 'Plans', 'Adopts', 'Fixes'];

    // Generates a random index between 0 and *max*.
    function randomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    const output = document.querySelectorAll('.animation .content')[0];
    const random = randomIndex(texts.length);
    const selectedWord = texts[random]

    let displayedLength = 0;
    function innerAnimation() {
        if(displayedLength >= selectedWord.length) {
            return;
        }

        ++displayedLength;
        const word = selectedWord.slice(0, displayedLength)
        output.innerHTML = word;

        setTimeout(innerAnimation, letterspeed);
    }

    innerAnimation();
    setTimeout(outAnimation, wordspeed);
}

// Main call to start the animation
outAnimation();
