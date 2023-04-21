document.getElementById("cuestionariomedia").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtén las respuestas
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');

  // Revisa si todas las preguntas fueron respondidas
  if (!q1 || !q2 || !q3 || !q4 || !q5) {
    Swal.fire("Error", "Por favor responde todas las preguntas", "error");
    return;
  }

  // Calcula la puntuación
  var score = 0;
  if (q1.value === "b") score++;
  if (q2.value === "b") score++;
  if (q3.value === 'b') score++;
  if (q4.value === 'a') score++;
  if (q5.value === 'a') score++;

  // Muestra la alerta con la puntuación
  Swal.fire(
    "Puntuación " + score,
    "Respondiste correctamente " + score + " de 5 preguntas",
    "success"
  );
});