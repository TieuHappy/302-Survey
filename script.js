document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const yesButton = document.getElementById('yesButton');
    const optionButtons = document.querySelectorAll('.option');

    yesButton.addEventListener('click', () => {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    });

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Laos') {
                page2.classList.add('hidden');
                page3.classList.remove('hidden');
            } else {
                let laughingGif = page2.querySelector('img[src="laughing-hysterically.gif"]');
                if (!laughingGif) {
                    laughingGif = document.createElement('img');
                    laughingGif.src = 'laughing-hysterically.gif';
                    laughingGif.alt = 'Laughing Snoopy';
                    laughingGif.style.maxWidth = '300px';
                    laughingGif.style.marginTop = '20px';
                    page2.appendChild(laughingGif);
                }
            }
        });
    });
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("floating-heart");
        document.body.appendChild(heart);
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        setTimeout(() => heart.remove(), 5000);
    }
}
setInterval(createHearts, 1000);
