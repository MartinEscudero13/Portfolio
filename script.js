// Menú móvil
const toggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
toggleBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

// Validación del formulario
const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll('input, textarea');
  let valido = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = '1px solid red';
      valido = false;
    } else {
      input.style.border = 'none';
    }
  });

  if (valido) {
    alert("Gracias por tu mensaje. Te responderé pronto.");
    form.reset();
  }
});

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
    emailjs.init("CQfLOBTxfMiPFbM0y"); // Tu public key

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Enviar usando sendForm
      emailjs.sendForm('service_hjdrs5n', 'template_ghf873t', this)
        .then(function (response) {
          console.log('Correo enviado con éxito al administrador', response);

          // Mostrar modal o mensaje
          mostrarModal(); // Asegurate de tener esta función definida

          // Resetear el formulario
          form.reset();
        })
        .catch(function (error) {
          console.error('Error al enviar al administrador', error);
          alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
        });
    });
  });

  function mostrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    setTimeout(() => modal.style.display = 'none', 4000);
  }
