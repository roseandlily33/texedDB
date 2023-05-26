const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('Before install prompt')
    butInstall.style.visibility = 'visible';
    //textHeader.textContent = 'Click the button to install!';
   //   window.deferredPrompt = event;
  //  butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('Clicked the install button')
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
   // const promptEvent = window.deferredPrompt;

 //if (!promptEvent) {
  // return; }

  //promptEvent.prompt();
  
  //window.deferredPrompt = null;
  
  //butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //  window.deferredPrompt = null;
    console.log('👍', 'appinstalled', event);
});




