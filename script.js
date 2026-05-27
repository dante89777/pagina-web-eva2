//Arreglo (tipo JSON en memoria)
let colaboradores = [];

//Validación
function validar(nombre, apellido, cargo, correo) {

  if (nombre === "" || apellido === "" || cargo === "" || correo === "") {
    return "Todos los campos son obligatorios";
  }

  if (!correo.includes("@empresa.cl")) {
    return "Debe ser correo @empresa.cl";
  }

  return "";
}

//Registrar
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

  //Objeto tipo JSON
  let colaborador = {
    id: Date.now(),
    nombre: nombre,
    apellido: apellido,
    cargo: cargo,
    correo: correo
  };

  //Guardar en arreglo
  colaboradores.push(colaborador);

  renderizar();

  return false;
}
//Renderizar tabla
function renderizar(lista = colaboradores) {

  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";

  lista.forEach(c => {
    tabla.innerHTML += `
      <tr>
        <td>${c.nombre}</td>
        <td>${c.apellido}</td>
        <td>${c.cargo}</td>
        <td>${c.correo}</td>
        <td>
          <button onclick="eliminar(${c.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}
//Eliminar
function eliminar(id) {
  colaboradores = colaboradores.filter(c => c.id !== id);
  renderizar();
}
//Filtrar
function filtrar() {
  let texto = document.getElementById("buscar").value.toLowerCase();

  let resultado = colaboradores.filter(c =>
    c.nombre.toLowerCase().includes(texto) ||
    c.cargo.toLowerCase().includes(texto)
  );

  renderizar(resultado);
}