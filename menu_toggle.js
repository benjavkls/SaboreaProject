// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal. 
// Es CRÍTICO que la clase sea ".menu-horizontal" (todo en minúsculas)
const menu = document.querySelector(".menu-horizontal"); 

// Solo si ambos elementos existen, añade el listener
if (btn && menu) {
  // Al hacer clic en el botón de hamburguesa
  btn.addEventListener("click", () => {
    // Alterna (agrega o quita) la clase "active" en el menú para mostrarlo u ocultarlo
    menu.classList.toggle("active");
  });
} else {
    // Si no lo encuentra, mostrará un error en la consola del navegador
    console.error("Error: Falta el botón .menu-toggle o el menú .menu-horizontal en el HTML.");
}