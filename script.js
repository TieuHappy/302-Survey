document.addEventListener('DOMContentLoaded', () => {
    function goToPage2() {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
    }

    function selectOption(option) {
        if (option === 'Laos') {
            document.getElementById('page2').classList.add('hidden');
            document.getElementById('page3').classList.remove('hidden');
        } else {
            alert('Only Laos is available!');
        }
    }

    document.querySelector('#page1 button:first-of-type').addEventListener('click', goToPage2);

    const optionButtons = document.querySelectorAll('#page2 button');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => selectOption(button.textContent));
    });
});
