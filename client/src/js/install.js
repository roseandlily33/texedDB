const butInstall = document.getElementById('buttonInstall');

console.log('On the button install page');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('Before install prompt')
    butInstall.style.visibility = 'visible';
 butInstall.classList.toggle('hidden', false);

});

butInstall.addEventListener('click', async () => {
  console.log('Clicked the install button');
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';

});

window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});




