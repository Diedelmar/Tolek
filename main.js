// Selector de elementos comunes
const navBtn = document.querySelector("#nav-btn");
const takeoverNav = document.querySelector("#takeover-nav");
const stickyNav = document.querySelector(".sticky-nav");
const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a, button, #nav-btn, input.btn");

// Variables de estado y animación
let initCursor = false;
let state_1 = "menu";
let menuDisappearComplete = false;
let arrowAppearComplete = false;
let arrowDisappearComplete = false;
let menuAppearComplete = false;
const segmentDuration = 60; // Duración de cada segmento de animación

// Función para animar un frame
function animateFrame(animationFunction) {
  let currentFrame = 1;

  function frame() {
    currentFrame++;
    if (currentFrame <= segmentDuration) {
      animationFunction(currentFrame);
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

// Animaciones de menú y flecha
function menuDisappearAnimation(frame) {
  // Lógica de animación para desaparición de menú
}

function arrowAppearAnimation(frame) {
  // Lógica de animación para aparición de flecha
}

function arrowDisappearAnimation(frame) {
  // Lógica de animación para desaparición de flecha
}

function menuAppearAnimation(frame) {
  // Lógica de animación para aparición de menú
}

// Función para abrir el menú animado
function openMenuAnimation() {
  if (!menuDisappearComplete) {
    animateFrame(menuDisappearAnimation);
  } else if (!arrowAppearComplete) {
    animateFrame(arrowAppearAnimation);
  }
}

// Función para cerrar el menú animado
function closeMenuAnimation() {
  if (!arrowDisappearComplete) {
    animateFrame(arrowDisappearAnimation);
  } else if (!menuAppearComplete) {
    animateFrame(menuAppearAnimation);
  }
}

// Evento de clic en el botón de navegación
navBtn.addEventListener("click", () => {
  takeoverNav.classList.toggle("shown");
  stickyNav.classList.toggle("difference");
});

// Actualizar la posición del cursor
function updateCursor(mouseX, mouseY) {
  if (!initCursor) {
    TweenLite.to(cursor, 0.5, { opacity: 1 });
    initCursor = true;
  }

  TweenLite.to(cursor, 0, { top: mouseY + "px", left: mouseX + "px" });
}

// Evento de movimiento del mouse
window.addEventListener("mousemove", (e) => {
  updateCursor(e.clientX, e.clientY);
});

// Evento de salida del mouse
window.addEventListener("mouseout", () => {
  TweenLite.to(cursor, 0.3, { opacity: 0 });
  initCursor = false;
});

// Eventos táctiles
window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  updateCursor(touch.clientX, touch.clientY);
});

window.addEventListener("touchstart", () => {
  TweenLite.to(cursor, 0.3, { opacity: 1 });
});

window.addEventListener("touchend", () => {
  setTimeout(() => {
    TweenLite.to(cursor, 0.3, { opacity: 0 });
  }, 200);
});

