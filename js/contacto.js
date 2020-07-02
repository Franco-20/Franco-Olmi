function validarNombre(input) {
  console.log(document.getElementById("nombre").value)
  if (input.value == "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}
function validarEmpresa(input) {
  if (input.value == "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}
function validarEmail(input) {
  let expresion = /\w+@\w+\.[a-z]{2,}$/;
  if (input.value != "" && expresion.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}
function validarConsulta(texto) {
  if (texto.value != "" && texto.value.length >= 10) {
    texto.className = "form-control is-valid";
  } else {
    texto.className = "form-control is-invalid";
  }
}

function validarGeneral(event) {
  event.preventDefault();
  console.log(" validar Email");

  if (
    validarNombre(document.getElementById("nombre")) &&
    validarEmpresa(document.getElementById("empresa")) &&
    validarEmail(document.getElementById("email")) &&
    validarConsulta(document.getElementById("consulta"))
  );

  enviarEmail();
}

function enviarEmail() {
  let template_params = {
    from_name: document.getElementById("nombre").value,
    message_html: `Empresa: ${document.getElementById("empresa").value}
    Email: ${document.getElementById("email").value}
    Consulta: ${document.getElementById("consulta").value}` ,
  };

  var service_id = "default_service";
  var template_id = "curriculum";
  emailjs.send(service_id, template_id, template_params).then(
    function (responde){
      console.log("respuesta cuando se envio correctamente" + responde.status)
      document.getElementById("alerta").className = "alert alert-primary my-3"
      document.getElementById("alerta").innerText = "Su consulta fue enviada correctamente"
    },
    function (error){
      console.log("se produjo un error" +error);
      document.getElementById("alerta").className = "alert alert-danger my-3"
      document.getElementById("alerta").innerText = "Ocurrio un error al enviar el mensaje"
    }
  );
}
