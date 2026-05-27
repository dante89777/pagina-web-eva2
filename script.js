// arreglo para guardar datos
let colaboradores = [];
// validar datos
function validar(nombre, apellido, cargo, correo) {
  if (nombre === "" || apellido === "" || cargo === "" || correo === "") {
    return "Todos los campos son obligatorios";
  }
  if (!correo.includes("@empresa.cl")) {
    return "El correo debe ser @empresa.cl";
  }
  return "";
}
// registrar colaborador
function registrar() {

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let cargo = document.getElementById("cargo").value;
  let correo = document.getElementById("correo").value;

  let error = validar(nombre, apellido, cargo, correo);

  if (error !== "") {
    document.getElementById("error").innerHTML = error;
    return false;
  }

  let colaborador = {
    id: Date.now(),
    nombre: nombre,
    apellido: apellido,
    cargo: cargo,
    correo: correo
  };
  colaboradores.push(colaborador);
  document.getElementById("error").innerHTML = "Registrado correctamente";
  return false;
}