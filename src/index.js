const Heading = require('./scripts/heading');

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const heading = new Heading('Hey Gamers!!');

    canvas.innerHTML = heading.heading;
})