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

document.addEventListener('DOMContentLoaded', function() {

    const datos = {
      labels: ['Menores de 18', '18-25', '26-35', '36-45', 'Más de 45'],
      datasets: [{
        label: 'Edades',
        data: [15, 30, 45, 25, 10], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data: datos,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    var myChart = new Chart(
      document.getElementById('ageGenderChart'),
      config
    );
});
