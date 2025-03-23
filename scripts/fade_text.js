//Entra il welcome-text
setTimeout(() => {
    let text = document.querySelector('#welcome-text');
    text.emit('fadeOut'); 

    setTimeout(() => { 
        text.parentNode.removeChild(text); 
    }, 3000); // Rimuove l'elemento dopo la dissolvenza
}, 4000);

//Entra il credits-text
setTimeout(() => {
  let text = document.querySelector('#credits-text');
  text.emit('fadeIn'); 

  setTimeout(() => { 
      text.parentNode.removeChild(text); 
  }, 5000); // Rimuove l'elemento dopo la dissolvenza
}, 4000);
