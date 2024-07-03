const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('toggle');
});


function enviarMensaje() {
    const mensajeInput = document.getElementById('mensaje');
    const mensaje = mensajeInput.value;
  
    if (mensaje.trim() !== '') {
      const chatWidget = document.getElementById('chat-widget');
      const userMessage = document.createElement('div');
      userMessage.classList.add('message', 'sent');
      userMessage.innerHTML = `<div class="sender">Usuario</div><div class="message-content">${mensaje}</div>`;
  
      chatWidget.appendChild(userMessage);
      mensajeInput.value = '';
      chatWidget.scrollTop = chatWidget.scrollHeight;
    }
  }
  

  