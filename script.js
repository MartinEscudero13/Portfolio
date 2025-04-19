// Menú móvil
const toggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
toggleBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

// Typing effect
const typed = new Typewriter(document.getElementById('typed-text'), {
  loop: true,
  delay: 75,
});

typed
  .typeString('Developer Full Stack')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Backend Developer')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Frontend Lover')
  .pauseFor(1500)
  .deleteAll()
  .typeString('JavaScript Enthusiast')
  .pauseFor(1500)
  .start();

// Scroll reveal
ScrollReveal().reveal('.seccion', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 200
});

// Scroll suave a secciones
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Modo claro / oscuro
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓';
themeToggle.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#61dafb; color:#0a0f1c; padding:0.6rem 1rem; border:none; border-radius:5px; cursor:pointer; z-index:200;';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('modo', document.body.classList.contains('light-mode') ? 'claro' : 'oscuro');
});

// Guardar modo
if (localStorage.getItem('modo') === 'claro') {
  document.body.classList.add('light-mode');
}

// Esperar que la página esté completamente cargada
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none'; // Eliminar de la vista después de la animación
    }, 600); // Tiempo igual al de la transición de opacidad
  });
  
  function toggleModo() {
    const body = document.body;

    body.classList.add('fade-transition');
    body.classList.toggle('light-mode');

    setTimeout(() => {
        body.classList.remove('fade-transition');
    }, 200); // igual al tiempo de fadeMode
}


document.addEventListener("DOMContentLoaded", function () {
  // Inicializa EmailJS
  emailjs.init("CQfLOBTxfMiPFbM0y");

  const form = document.getElementById('formulario');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensaje').value;

    // Enviar el formulario al administrador
    emailjs.sendForm('service_hjdrs5n', 'template_4dvptte', this)
      .then(function (response) {
        console.log('Correo enviado con éxito al administrador', response);

        // Mostrar el modal personalizado
        mostrarModal();

        // Resetear el formulario
        form.reset();
      })
      .catch(function (error) {
        console.error('Error al enviar al administrador', error);
        alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
      });
  });
  
  function mostrarModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const icono = modal.querySelector('i');  // Seleccionamos el ícono
  
    modal.style.display = 'block';
    overlay.style.display = 'block';
  
    // Forzar transición con un pequeño delay
    setTimeout(() => {
      modal.classList.add('show');
      overlay.classList.add('show');
      
      // Aquí se puede añadir la animación al ícono si es necesario
      icono.classList.add('animate__animated', 'animate__bounceIn'); // Ejemplo de animación
    }, 10); // Retardo para asegurar que el modal se haya mostrado primero
  
    // Cerrar el modal automáticamente después de 5 segundos (5000ms)
    setTimeout(() => {
      cerrarModal(); // Llamamos a la función para cerrar el modal
    }, 5000); // 5000ms = 5 segundos
  }
  
  function cerrarModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.remove('show');
    overlay.classList.remove('show');
  
    // Eliminar la animación antes de ocultar el modal
    const icono = modal.querySelector('i'); // Seleccionamos el ícono
    icono.classList.remove('animate__animated', 'animate__bounceIn'); // Removemos la animación
  
    setTimeout(() => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }, 300); // El tiempo para ocultar después de la animación
  }
  
  // Cierre con botón
  const closeButton = document.getElementById('close-modal');
  if (closeButton) {
    closeButton.addEventListener('click', cerrarModal);
  }  
});