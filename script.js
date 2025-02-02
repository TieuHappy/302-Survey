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
