const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown > ul');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
    console.log('works');
});