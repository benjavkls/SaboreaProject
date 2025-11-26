function validarLogin(event) {
  event.preventDefault();

  const CLAVE_SECRETA = "ok"; 
  const passwordInput = document.getElementById("password").value; 


  if (passwordInput.toLowerCase() === CLAVE_SECRETA) { 
    alert("¡Bienvenido a la cocina."); 
    window.location.href = "index.html"; 
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo."); 
    document.getElementById("password").value = ""; 
  }
  return false;
}