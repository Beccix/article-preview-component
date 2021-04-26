let button = document.getElementById('share-img');

button.addEventListener('click', () => {
    let cardProfile = document.getElementById('card-profile');
    let sharePainel = document.getElementById('share-painel');
        cardProfile.classList.remove('active');
        cardProfile.classList.add('hidden');
        sharePainel.classList.remove('hidden')
        sharePainel.classList.add('active') 
});