// Lista de usuarios predefinidos con sus correos y contraseñas
const users = [
    { email: "marcoszavaleta203@gmail.com", password: "ZMarquitos1?_" },
    { email: "zmarquitos99@gmail.com", password: "ELPEPES1" }
];

// Función para validar el formulario
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario para manejarlo manualmente

    // Obtener los valores de los inputs
    const email = document.getElementById("User-email").value;
    const password = document.getElementById("clave").value;

    // Limpiar mensajes de error previos
    document.getElementById("email-error").innerText = "";
    document.getElementById("password-error").innerText = "";

    // Validación de los datos del formulario
    let formIsValid = false;

    // Buscar el usuario que coincida con el correo ingresado
    const user = users.find(user => user.email === email);

    if (user) {
        // Si encontramos al usuario, validamos la contraseña
        if (user.password === password) {
            formIsValid = true;
        } else {
            document.getElementById("password-error").innerText = "La contraseña es incorrecta.";
        }
    } else {
        document.getElementById("email-error").innerText = "El correo electrónico es incorrecto.";
    }

    // Si el formulario es válido, simular el inicio de sesión exitoso
    if (formIsValid) {
        alert("Inicio de sesión exitoso");
        // Redirigir a la página principal o hacer otra acción
        window.location.href = "Home.html"; // Cambiar a la URL de la página principal
    }
});
