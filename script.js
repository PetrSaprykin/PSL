let discord = document.querySelector('#discord');
discord.addEventListener('click', () => {
    discord.classList.add('active');
    setTimeout(() => {
        discord.classList.remove('active');
    }, 5000);
})