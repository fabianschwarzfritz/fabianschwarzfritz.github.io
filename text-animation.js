/**
 * This file contains relevant coding for the little "text flow" animation
 * in the bottom of the website.
 * Using two different setTimeout method, calling the method outAnimation()
 * will result in the input words being displayed with the animation at random.
 */

function outAnimation() {
    // Pre defined texts
    const texts = ['Designs', 'Develops', 'Define', 'Plans', 'Adopts'];

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

        setTimeout(innerAnimation, 100);
    }

    innerAnimation();
    setTimeout(outAnimation, 1800);
}

// Main call to start the animation
outAnimation();
