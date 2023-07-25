///////////////////////////////API https://www.dolarsi.com/api/api.php?type=valoresprincipales //////////////////
document.addEventListener("DOMContentLoaded", () => {
  // Muestro los valores del dólar al cargar la página
  mostrarValoresDolarPeriodicamente();
});

function mostrarValoresDolarEnPantalla(valoresDolar) {
  const pantallaDolar = document.getElementById("pantallaDolar");
  pantallaDolar.innerHTML = ""; // Limpiamos el contenido previo

  for (const valor of valoresDolar) {
    const nombreCasa = valor.casa.nombre;
    const compra = valor.casa.compra;
    const venta = valor.casa.venta;

    // Creo el elemento <p> para mostrar el nombre de la casa de cambio
    const elementoNombreCasa = document.createElement("div");
    elementoNombreCasa.textContent = `${nombreCasa}`;
    elementoNombreCasa.classList.add("tituloDolar");

    // Creo el elemento <p> para mostrar el valor de compra
    const elementoCompra = document.createElement("p");
    elementoCompra.textContent = `Compra: $${compra}`;
    elementoCompra.classList.add("logDolar");

    // Creo el elemento <p> para mostrar el valor de venta
    const elementoVenta = document.createElement("p");
    elementoVenta.textContent = `Venta: $${venta}`;
    elementoVenta.classList.add("logDolar");

    // Agrego los elementos <p> al div con id "pantallaDolar"
    pantallaDolar.appendChild(elementoNombreCasa);
    pantallaDolar.appendChild(elementoCompra);
    pantallaDolar.appendChild(elementoVenta);
  }
}

// Función para obtener los valores del dólar y mostrarlos periódicamente
function mostrarValoresDolarPeriodicamente() {
  const pantallaDolar = document.getElementById("pantallaDolar");
  //Si todavia esta cargando la pagina, que muestre cargando valores
  pantallaDolar.textContent = "Cargando Valores...";

  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => response.json())
    .then((data) => {
      // Filtro los valores para obtener solo los del dólar
      const valoresDolar = data.filter((valor) => valor.casa.nombre.includes("Dolar"));

      // Mostrar los valores en el elemento con id "pantallaDolar"
      mostrarValoresDolarEnPantalla(valoresDolar);

      // Llamar a la función cada 1 minuto (60000 milisegundos)
      setTimeout(mostrarValoresDolarPeriodicamente, 60000);
    })
    .catch((error) => {
      console.log("Error al obtener los valores del dólar:", error);
      // Intentar nuevamente después de 10 segundos en caso de error
      setTimeout(mostrarValoresDolarPeriodicamente, 10000);
    });
}

///////////////////////////////OCULTO PANTALLAS DE INICIO //////////////////

let pantallaDatos = document.getElementById("pantallaDatos");
pantallaDatos.style.display = "none";

let pantallaHistorial = document.getElementById("pantallaHistorial");
pantallaHistorial.style.display = "none";

///////////////////////////////ARMADO DE HTML //////////////////
let contenidoBanner = document.getElementById("pantallaBanner");
contenidoBanner.innerHTML = "<div class='contenedorBanner'>" +
  "<h2>¡Conoce Nuestros Nuevos Servicios!</h2>" +
  "<p>Descubre las últimas incorporaciones a nuestra lista de servicios.</p>" +
  "<ul style='list-style: none;'>" +
  "<li>Nuevas opciones de tarjetas de crédito con beneficios exclusivos.</li>" +
  "<li>Préstamos personales con tasas de interés competitivas.</li>" +
  "<li>Asesoría financiera personalizada para alcanzar tus metas.</li>" +
  "<li>Banca en línea y móvil para una mayor comodidad.</li>" +
  "</ul>" +
  "</div>";

let contenidoCuenta = document.getElementById("pantallaDatos");
contenidoCuenta.innerHTML = "<div class='contenedor'>" +
  "<div class='cuenta-info' id='cuenta-info'>" +
  "<span id='nombre'></span><br><br>" +
  "<p class='titulo-cuenta' id='titulo-cuenta'></p>" +
  "<h3 id='saldo-cuenta'></h3>" +
  "<p id='limite-extraccion'></p>" +
  "</div>" +
  "</div>";

let contenidoModal = document.getElementById("loginModal");
contenidoModal.innerHTML = "<div class='modal-content'>" +
  "<span class='close'>&times;</span>" +
  "<form id='loginForm'>" +
  "<h1>Inicio Sesion</h1><hr>" +
  "<div class='form-group'>" +
  "<label for='usuario'>Usuario:</label>" +
  "<input type='text' class='form-control' id='usuario' required>" +
  "</div>" +
  "<div class='form-group'>" +
  "<label for='password'>Contraseña:</label>" +
  "<input type='password' class='form-control' id='password' required>" +
  "</div><hr>" +
  "<button type='button' class='btn Iniciar'>Ingresar</button>" +
  "</form>" +
  "</div>";

let contenidoBotonera = document.getElementById("valores-cuenta");
contenidoBotonera.innerHTML =
  "<button class='links btn Logueo' id='iniciarSesion'>Iniciar Sesion" +
  "<button class='links' id='extraerDinero'>Extracción</button>" +
  "<button class='links' id='depositarDinero'>Depositar</button>" +
  "<button class='links' id='pagarServicio'>Servicios</button>" +
  "<button class='links' id='transferirDinero'>Transferencias</button>" +
  "<button class='links' id='crearPlazoFijo'>Plazo Fijo</button>" +
  "<button class='links' id='generaToken'>Generar Token</button>" +
  "<button class='links' id='cargarDatosCliente'>Mis Datos</button>" +
  "<button class='links' id='actualizarDatosPersonales'>Act. Datos</button>" +
  "<button class='links' id='btnBorrarSession'>Borrar Sesion</button>" +
  "<button class='links' id='btnBorrarStorage'>Borrar Storage</button>" +
  "<button class='links' id='btnDolar'>Consultar Dolar</button>";

let contenidoHistorial = document.getElementById("pantallaHistorial");
contenidoHistorial.innerHTML = "<ul class='contenedorHistorial' id='historial'>" +
  "<p class='logs'>HISTORIAL MOVIMIENTOS</p>" +
  "</ul>";

///////////////////////TITLE PERSONALIZADO//////////////////////////////////

let titulosPersonalizados = {
  extraerDinero: 'Permite hacer extracciones con un límite proporcionado por el banco',
  depositarDinero: 'Permite hacer depósitos en la cuenta',
  transferirDinero: 'Permite hacer transferencias de tu cuenta hacia otras',
  crearPlazoFijo: 'Simular Plazos Fijos en base a la cantidad de días establecidos',
  generaToken: 'Genera token para hacer transferencias toma el último token generado',
  cargarDatosCliente: 'Ver datos personales',
  actualizarDatosPersonales: 'Puedes actualizar tus datos personales',
};

// Obtengo todos los elementos de botón por su clase
let buttons = document.getElementsByClassName('links');
// Recorro los botones y agrego el evento 'mouseover'
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function () {
    // Obtén el ID del botón
    let buttonId = this.id;

    // Verifica si hay un título personalizado para el ID del botón
    if (titulosPersonalizados.hasOwnProperty(buttonId)) {
      // Establece el título personalizado
      this.title = titulosPersonalizados[buttonId];
    } else {
      // Si no hay un título personalizado, utiliza el valor predeterminado
      this.title = this.innerHTML;
    }
  });
}

/////////////////////////MODAL//////////////////////////////////
// Obtener referencias a los elementos del DOM
let loginButton = document.getElementById("iniciarSesion");
let loginModal = document.getElementById("loginModal");
let closeButton = document.getElementsByClassName("close")[0];

// Abrir el modal cuando se hace clic en el botón de inicio de sesión
loginButton.onclick = function () {
  loginModal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en el botón de cerrar (x)
closeButton.onclick = function () {
  loginModal.style.display = "none";
}

//BOTON CERRAR SESION LO ELIMINO SI NO ESTA LOGUEADO
let botonLocal = document.getElementById("btnBorrarStorage");
botonLocal.style.display = "none";

let botonSesion = document.getElementById("btnBorrarSession");
botonSesion.style.display = "none";

////////////////////////DECLARACION DE VARIABLES LET/////////////////////////////////
const fechaActual = new Date();
let sesionIniciada = false; // Variable para controlar si la sesión ha sido iniciada
const cliente = {
  nombreUsuario: "Leonel Fernandez",
  usuario: "lfernandez",
  saldoCuenta: 150000,
  limiteExtraccion: 60000,
  claveCorrecto: 1234,
  fechaNacimiento: "1995-12-03",
  cuentaAmigo1: 1234567,
  domicilio: "Chile 2529",
};

////////////////////////RESTAURAR E INICIO DE SESION/////////////////////////////////////////////
// Obtén la referencia al botón "Ingresar" por su clase
let ingresarButton = document.querySelector("#loginForm .Iniciar");
// Asigna el evento de clic al botón
ingresarButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Obtén los valores de usuario y contraseña
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  // Realiza la validación de usuario y contraseña
  if (usuario !== cliente.usuario || password !== cliente.claveCorrecto.toString()) {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o Contraseña incorrecta',
      text: 'Por favor, intente nuevamente',
    })
    return;
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido, ' + cliente.nombreUsuario + '!!',
      showConfirmButton: false,
      timer: 2500,
    })
    // Guardar los valores en sessionStorage
    sessionStorage.setItem("usuario", usuario);
    sessionStorage.setItem("password", password);
    // Convertir el objeto cliente a una cadena JSON
    const clienteJSON = JSON.stringify(cliente);
    // Guardar la cadena JSON en el almacenamiento local
    localStorage.setItem("cliente", clienteJSON);
    // Cerrar el modal
    loginModal.style.display = "none";
    agregarRegistroHistorial(`Session: ${usuario} y ${password} - ${fechaActual}`);
    restaurarSesion();
  }
});

// Función para restaurar la sesión
function restaurarSesion() {
  const saldoCuenta = obtenerSaldoDeAlmacenamiento();
  const usuario = sessionStorage.getItem("usuario");
  const password = sessionStorage.getItem("password");
  if (saldoCuenta && usuario && password) {
    cliente.saldoCuenta = parseInt(saldoCuenta);
    // Cargar las funciones para visualizar el contenido en pantalla
    cargarVisual();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    sesionIniciada = true; // Actualizar el estado de la sesión
  }
}

function separadorDeMiles(numero) {
  // Verificar si el número es null o indefinido
  if (numero === null || numero === undefined) {
    return "";
  }
  // Convierto el número a string.
  let str = numero.toString();
  // Aquí almacenaremos los resultados.
  let resultado = "";

  // recorro el string con for "str.length" veces.
  for (let i = 0; i < str.length; i++) {
    // Cada número, lo concateno a "resultado".
    resultado += str[i];

    // y luego de concatenar el número, verifico si el iterador es un múltiplo de 3.
    // pongo "i < str.length - 1" para evitar que el punto se agregue al final del string.
    if ((str.length - i - 1) % 3 === 0 && i < str.length - 1) {
      resultado += ".";
    }
  }

  return resultado;
}


/////////////////////////////////////FUNCIONES INTERACTIVAS////////////////////////////////////
function actualizarDatosCliente(clienteGuardado, nuevoLimiteExtraccion, nuevaClaveCorrecto, nuevaFechaNacimiento, nuevaCuentaAmigo1, nuevoDomicilio) {
  if (nuevoLimiteExtraccion !== null && nuevoLimiteExtraccion !== "") {
    clienteGuardado.limiteExtraccion = nuevoLimiteExtraccion;
  }
  if (nuevaClaveCorrecto !== null && nuevaClaveCorrecto !== "") {
    clienteGuardado.claveCorrecto = nuevaClaveCorrecto;
  }
  if (nuevaFechaNacimiento !== null && nuevaFechaNacimiento !== "") {
    clienteGuardado.fechaNacimiento = nuevaFechaNacimiento;
  }
  if (nuevaCuentaAmigo1 !== null && nuevaCuentaAmigo1 !== "") {
    clienteGuardado.cuentaAmigo1 = nuevaCuentaAmigo1;
  }
  if (nuevoDomicilio !== null && nuevoDomicilio !== "") {
    clienteGuardado.domicilio = nuevoDomicilio;
  }

  localStorage.setItem("cliente", JSON.stringify(clienteGuardado));
}

let actualizarDatosPersonales = document.getElementById("actualizarDatosPersonales");
actualizarDatosPersonales.onclick = () => {
  // Recuperar los datos del cliente del localStorage
  const clienteGuardado = JSON.parse(localStorage.getItem("cliente"));

  Swal.fire({
    title: 'Nuevo límite de extracción',
    input: 'text',
    inputValue: clienteGuardado.limiteExtraccion || '',
    inputValidator: (value) => {
      if (!value) {
        return 'Debes ingresar el nuevo límite de extracción, en caso de mantener debe hacer click en siguiente';
      }
    },
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Siguiente &rarr;',
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'La operación de actualización de datos ha sido cancelada.',
      });
      return;
    }

    const nuevoLimiteExtraccion = result.value;

    Swal.fire({
      title: 'Nueva clave correcta',
      input: 'text',
      inputValue: clienteGuardado.claveCorrecto || '',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar la nueva clave correcta, en caso de mantener debe hacer click en siguiente';
        }
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Siguiente &rarr;'
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'error',
          title: 'Cancelado',
          text: 'La operación de actualización de datos ha sido cancelada.',
        });
        return;
      }

      const nuevaClaveCorrecto = result.value;

      Swal.fire({
        title: 'Nueva fecha de nacimiento',
        input: 'text',
        inputValue: clienteGuardado.fechaNacimiento || '',
        inputValidator: (value) => {
          if (!value) {
            return 'Debes ingresar la nueva fecha de nacimiento, en caso de mantener debe hacer click en siguiente';
          }
        },
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Siguiente &rarr;'
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: 'error',
            title: 'Cancelado',
            text: 'La operación de actualización de datos ha sido cancelada.',
          });
          return;
        }

        const nuevaFechaNacimiento = result.value;

        Swal.fire({
          title: 'Nueva cuenta amiga 1',
          input: 'text',
          inputValue: clienteGuardado.cuentaAmigo1 || '',
          inputValidator: (value) => {
            if (!value) {
              return 'Debes ingresar la nueva cuenta amiga 1, en caso de mantener debe hacer click en siguiente';
            }
          },
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Siguiente &rarr;'
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              icon: 'error',
              title: 'Cancelado',
              text: 'La operación de actualización de datos ha sido cancelada.',
            });
            return;
          }

          const nuevaCuentaAmigo1 = result.value;

          Swal.fire({
            title: 'Nuevo domicilio',
            input: 'text',
            inputValue: clienteGuardado.domicilio || '',
            inputValidator: (value) => {
              if (!value) {
                return 'Debes ingresar el nuevo domicilio, en caso de mantener debe hacer click en siguiente';
              }
            },
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Actualizar'
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                icon: 'error',
                title: 'Cancelado',
                text: 'La operación de actualización de datos ha sido cancelada.',
              });
              return;
            }

            const nuevoDomicilio = result.value;

            // Actualizo los campos del cliente solo si se ingresaron valores no nulos o no vacíos
            actualizarDatosCliente(clienteGuardado, nuevoLimiteExtraccion, nuevaClaveCorrecto, nuevaFechaNacimiento, nuevaCuentaAmigo1, nuevoDomicilio);

            Swal.fire({
              icon: 'success',
              title: 'Datos Actualizados',
              text: 'Los datos del cliente han sido actualizados.',
            });
          });
        });
      });
    });
  });
}



let cargarDatosCliente = document.getElementById("cargarDatosCliente");
cargarDatosCliente.onclick = () => {
  // Recupero los datos del cliente del localStorage
  const clienteGuardado = JSON.parse(localStorage.getItem("cliente"));

  // Construyo el mensaje con los datos del cliente
  const mensaje = "<strong>Nombre:</strong> " + clienteGuardado.nombreUsuario +
    "<br><strong>Saldo de cuenta:</strong> $" + clienteGuardado.saldoCuenta +
    "<br><strong>Clave correcta:</strong> " + clienteGuardado.claveCorrecto +
    "<br><strong>Límite de extracción:</strong> $" + clienteGuardado.limiteExtraccion +
    "<br><strong>Fecha de nacimiento:</strong> " + clienteGuardado.fechaNacimiento +
    "<br><strong>Cuenta amiga 1:</strong> " + clienteGuardado.cuentaAmigo1 +
    "<br><strong>Domicilio:</strong> " + clienteGuardado.domicilio;

  Swal.fire({
    title: "Datos del Cliente",
    html: mensaje,
    icon: "info",
    confirmButtonText: "Cerrar",
    showCancelButton: false,
  });
  console.log("Los datos del cliente han sido cargados en la pantalla.");
};


let extraerDinero = document.getElementById("extraerDinero");
extraerDinero.onclick = () => {
  if (!sesionIniciada) {
    Swal.fire({
      icon: 'error',
      title: 'Primero debes iniciar sesión',
    });
    return;
  } else {
    Swal.fire({
      title: 'Ingrese el monto a extraer',
      input: 'number',
      html:
        '<strong>Su saldo actual es:</strong> $' + separadorDeMiles(cliente.saldoCuenta) + '<br>' +
        '<strong>Su límite de extracción es:</strong> $' + separadorDeMiles(cliente.limiteExtraccion),
      showCancelButton: true,
      confirmButtonText: 'Extraer',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showLoaderOnConfirm: true,
      preConfirm: (dineroAExtraer) => {
        console.log('Se extrajo:', dineroAExtraer);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(dineroAExtraer);
          }, 1500);
        });
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'error',
          title: 'Cancelado',
          text: 'Se ha cancelado la operación.',
        });
        return;
      }
      if (!result.isConfirmed) {
        return;
      }
      let dineroAExtraer = result.value;
      let numeroDineroAExtraer = parseInt(dineroAExtraer);
      if (Number.isNaN(numeroDineroAExtraer)) {
        return;
      }
      if (dineroAExtraer == null || dineroAExtraer == "") {
        return;
      }
      if (!haySaldoEnLaCuenta(numeroDineroAExtraer)) {
        Swal.fire({
          icon: 'error',
          title: 'Estás intentando extraer $' + dineroAExtraer,
          text: 'No hay suficiente saldo en tu cuenta para extraer esa cantidad de dinero.',
        });
        return;
      }
      if (superaLimiteDeExtraccion(dineroAExtraer)) {
        Swal.fire({
          icon: 'error',
          title: 'Estás intentando extraer $' + dineroAExtraer,
          text: 'La cantidad de dinero a extraer supera tu límite de extracción.',
        });
        return;
      }
      if (!esMultiploDe100(numeroDineroAExtraer)) {
        Swal.fire({
          icon: 'error',
          title: 'Estás intentando extraer $' + dineroAExtraer,
          text: 'Solo puedes realizar extracciones mientras sea múltiplo de 100.',
        });
        return;
      }
      Swal.fire('Extracción realizada', 'Se ha extraído el monto de: $' + separadorDeMiles(dineroAExtraer), 'success');
      restarDinero(numeroDineroAExtraer);
      agregarRegistroHistorial(`Se extrajo: $${separadorDeMiles(numeroDineroAExtraer)} - ${fechaActual}`);
      actualizarSaldoEnPantalla();
    });
  }
};

let depositarDinero = document.getElementById("depositarDinero");
depositarDinero.onclick = () => {
  if (!sesionIniciada) {
    Swal.fire({
      icon: 'error',
      title: 'Primero debes iniciar sesión',
    });
    return;
  } else {
    Swal.fire({
      title: 'Ingrese el monto a depositar',
      input: 'number',
      inputLabel: 'Su saldo actual es $' + separadorDeMiles(cliente.saldoCuenta),
      showCancelButton: true,
      confirmButtonText: 'Depositar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showLoaderOnConfirm: true,
      preConfirm: (dineroADepositar) => {
        console.log('Se depositó:', dineroADepositar);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(dineroADepositar);
          }, 1500);
        });
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'error',
          title: 'Cancelado',
          text: 'La operación de depósito ha sido cancelada.',
        });
        return;
      }

      let dineroADepositar = result.value;
      let numeroDineroADepositar = parseInt(dineroADepositar);
      if (Number.isNaN(numeroDineroADepositar)) {
        return;
      }
      if (numeroDineroADepositar == null || numeroDineroADepositar == "") {
        return;
      }
      Swal.fire('Depósito realizado', 'Se depositó la suma de: $' + separadorDeMiles(numeroDineroADepositar), 'success');
      sumarDinero(numeroDineroADepositar);
      agregarRegistroHistorial(`Se Depositaron: $${separadorDeMiles(numeroDineroADepositar)} - ${fechaActual}`);
      actualizarSaldoEnPantalla();
    });
  }
};

let pagarServicio = document.getElementById("pagarServicio");
pagarServicio.onclick = () => {
  if (!sesionIniciada) {
    Swal.fire("Debes iniciar sesión antes de consultar el saldo.");
    return;
  } else {
    let agua = 1350;
    let telefono = 825;
    let luz = 2210;
    let internet = 7570;

    let servicios = ["Agua", "Teléfono", "Luz", "Internet"];

    Swal.fire({
      title: "Ingrese el número que corresponda con el servicio que quieres pagar:",
      input: "select",
      inputOptions: {
        1: servicios[0] + " - Valor a abonar $" + agua,
        2: servicios[1] + " - Valor a abonar $" + telefono,
        3: servicios[2] + " - Valor a abonar $" + luz,
        4: servicios[3] + " - Valor a abonar $" + internet,
      },
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "") {
            resolve("Debes seleccionar una opción");
          } else {
            resolve();
          }
        });
      },
      showCancelButton: true,
      confirmButtonText: "Pagar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'error',
          title: 'Cancelado',
          text: 'La operación de pago de servicio ha sido cancelada.',
        });
        return;
      }

      if (result.isConfirmed) {
        let opcionElegida = parseInt(result.value);

        if (opcionElegida >= 1 && opcionElegida <= servicios.length) {
          let saldoAnterior = cliente.saldoCuenta;

          switch (opcionElegida) {
            case 1: // Agua
              if (!haySaldoEnLaCuenta(agua)) {
                Swal.fire("No hay saldo suficiente para pagar el servicio de Agua.");
                return;
              }
              restarDinero(agua);
              agregarRegistroHistorial(`Se Pago el servicio: ${servicios[0]} - Monto $${separadorDeMiles(agua)} - ${fechaActual}`);
              Swal.fire({
                title: "Pago Exitoso",
                html:
                  "Has pagado $" +
                  agua +
                  " del servicio de Agua.<br>Saldo anterior: $" +
                  separadorDeMiles(saldoAnterior) +
                  "<br>Saldo actual: $" +
                  separadorDeMiles(cliente.saldoCuenta),
                icon: "success",
              });
              break;
            case 2: // Teléfono
              if (!haySaldoEnLaCuenta(telefono)) {
                Swal.fire("No hay saldo suficiente para pagar el servicio de Teléfono.");
                return;
              }
              agregarRegistroHistorial(`Se Pago el servicio: ${servicios[1]} - Monto $${separadorDeMiles(telefono)} - ${fechaActual}`);
              restarDinero(telefono);
              Swal.fire({
                title: "Pago Exitoso",
                html:
                  "Has pagado $" +
                  telefono +
                  " del servicio Teléfono.<br>Saldo anterior: $" +
                  separadorDeMiles(saldoAnterior) +
                  "<br>Saldo actual: $" +
                  separadorDeMiles(cliente.saldoCuenta),
                icon: "success",
              });
              break;
            case 3: // Luz
              if (!haySaldoEnLaCuenta(luz)) {
                Swal.fire("No hay saldo suficiente para pagar el servicio de Luz.");
                return;
              }
              agregarRegistroHistorial(`Se Pago el servicio: ${servicios[2]} - Monto $${separadorDeMiles(luz)} - ${fechaActual}`);
              restarDinero(luz);
              Swal.fire({
                title: "Pago Exitoso",
                html:
                  "Has pagado $" +
                  luz +
                  " del servicio de Luz.<br>Saldo anterior: $" +
                  separadorDeMiles(saldoAnterior) +
                  "<br>Saldo actual: $" +
                  separadorDeMiles(cliente.saldoCuenta),
                icon: "success",
              });
              break;
            case 4: // Internet
              if (!haySaldoEnLaCuenta(internet)) {
                Swal.fire("No hay saldo suficiente para pagar el servicio de Internet.");
                return;
              }
              agregarRegistroHistorial(`Se Pago el servicio: ${servicios[3]} - Monto $${separadorDeMiles(internet)} - ${fechaActual}`);
              restarDinero(internet);
              Swal.fire({
                title: "Pago Exitoso",
                html:
                  "Has pagado $" +
                  internet +
                  " del servicio de Internet.<br>Saldo anterior: $" +
                  separadorDeMiles(saldoAnterior) +
                  "<br>Saldo actual: $" +
                  separadorDeMiles(cliente.saldoCuenta),
                icon: "success",
              });
              break;
            default:
              Swal.fire("Opción inválida. Por favor, ingresa un número del 1 al 4.");
              return;
          }
          actualizarSaldoEnPantalla();
        }
      }
    });
  }
};

let transferirDinero = document.getElementById("transferirDinero");
transferirDinero.onclick = () => {
  if (!sesionIniciada) {
    Swal.fire("Debes iniciar sesión antes de realizar una transferencia.");
    return;
  }

  Swal.fire({
    title: "Ingrese el monto a transferir:",
    input: "number",
    inputAttributes: {
      step: "any",
    },
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Transferir",
    cancelButtonText: "Cancelar",
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === "") {
          resolve("Debes ingresar un monto válido");
        } else if (!haySaldoEnLaCuenta(parseFloat(value))) {
          resolve("No hay saldo suficiente en tu cuenta para transferir esa cantidad de dinero.");
        } else {
          resolve();
        }
      });
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'La operación de transferencia ha sido cancelada.',
      });
      return;
    }

    if (result.isConfirmed) {
      const montoATransferir = parseFloat(result.value);

      Swal.fire({
        title: "Ingrese el número de cuenta amiga, si no lo recuerda, puede dirigirse a 'Mis Datos' para visualizarlo:",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("Debes ingresar un número de cuenta");
            } else {
              const clienteGuardado = JSON.parse(localStorage.getItem("cliente"));
              const cuentaAmigoGuardadaenLocal = clienteGuardado.cuentaAmigo1;

              if (value != cuentaAmigoGuardadaenLocal) {
                resolve("Solo puedes transferir dinero a una cuenta amiga previamente configurada.");
              } else {
                resolve("");
              }
            }
          });
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: 'error',
            title: 'Cancelado',
            text: 'La operación de transferencia ha sido cancelada.',
          });
          return;
        }

        if (result.isConfirmed) {
          const cuentaAmigaIngresada = result.value;
          const ultimoToken = localStorage.getItem("ultimoToken");
          const mostrarBotonPegar = ultimoToken !== null && ultimoToken !== "";
          const mensajeToken = mostrarBotonPegar ? "Se generó por ultima vez este token, Deseas utilizarlo?:" : "Aún no has generado un token.";

          Swal.fire({
            title: mensajeToken,
            input: "text",
            inputValue: mostrarBotonPegar ? ultimoToken : undefined,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            showCancelButton: true,
            confirmButtonText: mostrarBotonPegar ? "Transferir" : "Generar Token",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (!mostrarBotonPegar) {
                  // Aquí generamos un nuevo token en caso de que no se haya generado previamente
                  localStorage.setItem("ultimoToken", tokenGenerado());

                  resolve();
                } else if (value === "") {
                  resolve("Debes ingresar un token válido");
                } else if (value !== ultimoToken) {
                  resolve("El token ingresado no es válido. La transferencia no puede ser realizada.");
                } else {
                  resolve();
                }
              });
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                icon: 'error',
                title: 'Cancelado',
                text: 'La operación de transferencia ha sido cancelada.',
              });
              return;
            }

            if (result.isConfirmed) {
              restarDinero(montoATransferir);
              actualizarSaldoEnPantalla();
              agregarRegistroHistorial(`Se transfirió el monto : $${separadorDeMiles(montoATransferir)} a la cuenta amiga  ${cuentaAmigaIngresada} - ${fechaActual}`);
              Swal.fire("Transferencia Exitosa", "Se ha transferido $" + separadorDeMiles(montoATransferir) + " a la cuenta amiga " + cuentaAmigaIngresada, "success");
            }
          });
        }
      });
    }
  });
};


let crearPlazoFijo = document.getElementById("crearPlazoFijo");
crearPlazoFijo.onclick = () => {
  if (!sesionIniciada) {
    Swal.fire("Debes iniciar sesión antes de consultar el saldo.");
    return;
  }

  Swal.fire({
    title: "Ingrese el monto a invertir en plazo fijo:",
    input: "number",
    inputAttributes: {
      step: "any",
    },
    showCancelButton: true,
    confirmButtonText: "Crear",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === "") {
          resolve("Debes ingresar un monto válido");
        } else if (!haySaldoEnLaCuenta(parseFloat(value))) {
          resolve("No hay saldo en tu cuenta para invertir esa cantidad de dinero en plazo fijo.");
        } else {
          resolve();
        }
      });
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'La operación de creación de plazo fijo ha sido cancelada.',
      });
      return;
    }

    if (result.isConfirmed) {
      const montoPlazoFijo = parseFloat(result.value);

      Swal.fire({
        title: "Ingrese la cantidad de días para el plazo fijo:",
        input: "number",
        inputAttributes: {
          step: "1",
          min: "1",
        },
        showCancelButton: true,
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("Debes ingresar una cantidad de días");
            } else if (parseInt(value) <= 0) {
              resolve("Debes ingresar una cantidad de días mayor a cero");
            } else {
              resolve();
            }
          });
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: 'error',
            title: 'Cancelado',
            text: 'La operación de creación de plazo fijo ha sido cancelada.',
          });
          return;
        }

        if (result.isConfirmed) {
          const diasPlazoFijo = parseInt(result.value);
          const interesPlazoFijo = calcularPlazoFijo(montoPlazoFijo, diasPlazoFijo);

          if (interesPlazoFijo > 0) {
            restarDinero(montoPlazoFijo);
            actualizarSaldoEnPantalla();
            agregarRegistroHistorial(`Plazo Fijo Creado: $${separadorDeMiles(montoPlazoFijo)} a ${diasPlazoFijo} dias - ${fechaActual}`);
            Swal.fire({
              title: "Plazo Fijo Creado",
              html:
                "Has creado un plazo fijo de $" +
                separadorDeMiles(montoPlazoFijo) +
                " a " +
                diasPlazoFijo +
                " días.<br>Interés ganado: $" +
                interesPlazoFijo +
                "<br>Saldo actual: $" +
                cliente.saldoCuenta,
              icon: "success",
            });
          } else {
            Swal.fire("Error", "No es posible crear un plazo fijo con los datos ingresados.", "error");
          }
        }
      });
    }
  });
};

let tokenTimeout = null;
let segundosTranscurridos = 0;
let interval = null;
let lastToken = null; // Guardo el último token generado
let dialogClosedByCancel = false; // Variable para controlar si el cuadro de diálogo se cerró por el botón de cancelar

// Genero un token para transferencias
function tokenGenerado() {
  const longitudToken = 6;
  let token = "";
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < longitudToken; i++) {
    token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return token;
}

document.getElementById("generaToken").onclick = () => {
  // Limpio el timeout e intervalo anteriores si existen
  clearTimeout(tokenTimeout);
  clearInterval(interval);

  // Reinicio el contador
  segundosTranscurridos = 0;

  if (!sesionIniciada) {
    Swal.fire("Debes iniciar sesión antes de consultar el saldo.");
    return;
  }

  // Genero un nuevo token
  lastToken = tokenGenerado();
  localStorage.setItem("ultimoToken", lastToken);

  // Muestro cuadro de diálogo para copiar el token
  const swalDialog = Swal.fire({
    title: "Token Generado, cada 10 segundos generará uno nuevo",
    html: `<input type="text" value="${lastToken}" readonly>
    <p id="contadorSegundos">${segundosTranscurridos} segundos</p>`, // Agrego el contador de segundos dentro del diálogo
    showCancelButton: true,
    confirmButtonText: "Copiar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    didOpen: () => {
      // Obtengo el elemento <p> del contador dentro del diálogo
      const contadorSegundosElement = Swal.getPopup().querySelector("#contadorSegundos");

      // Inicio el contador para generar un nuevo token después de 30 segundos
      interval = setInterval(() => {
        segundosTranscurridos++;
        // Actualizo el contador de segundos en el cuadro de diálogo en tiempo real
        contadorSegundosElement.textContent = segundosTranscurridos + " segundos";
        console.log(segundosTranscurridos);

        // Si han pasado 10 segundos y el cuadro de diálogo no ha sido cancelado, genero un nuevo token
        if (segundosTranscurridos === 10 && !dialogClosedByCancel) {
          clearInterval(interval);
          generarNuevoToken();
        }
      }, 1000);
    },
    preConfirm: () => {
      const inputElement = Swal.getPopup().querySelector("input");
      inputElement.select();
      inputElement.setSelectionRange(0, 99999); // Para dispositivos móviles, para un futuro...
      document.execCommand("copy");
      Swal.showValidationMessage("Token copiado al portapapeles");
      // Limpio el timeout del contador y reinicio el contador a cero
      clearTimeout(tokenTimeout);
      segundosTranscurridos = 0;
    },
  });

  // Cuando se cierra el cuadro de diálogo, limpio el timeout y el intervalo
  swalDialog.then((result) => {
    clearInterval(interval);
    if (result.dismiss === Swal.DismissReason.cancel) {
      // Si el usuario hizo clic en el botón de cancelar, detengo el contador y marco el cuadro de diálogo como cerrado por cancelación
      dialogClosedByCancel = true;
      clearTimeout(tokenTimeout);
      segundosTranscurridos = 0;
    } else {
      // Si el usuario confirmó la acción (copió el token), marco el cuadro de diálogo como cerrado por confirmación
      dialogClosedByCancel = false;
      // configuro un nuevo timeout para generar otro token después de 30 segundos
      tokenTimeout = setTimeout(generarNuevoToken, 30000);
    }
  });
};

// Genero un nuevo token automáticamente
function generarNuevoToken() {
  // Reinicio el contador y el intervalo
  segundosTranscurridos = 0;
  clearInterval(interval);

  // Genero un nuevo token
  lastToken = tokenGenerado();
  localStorage.setItem("ultimoToken", lastToken);

  Swal.fire({
    title: "Nuevo Token Generado",
    html: `<input type="text" value="${lastToken}" readonly>
    <p id="contadorSegundos">${segundosTranscurridos} segundos</p>`, 
    showCancelButton: true,
    confirmButtonText: "Copiar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    didOpen: () => {
      const contadorSegundosElement = Swal.getPopup().querySelector("#contadorSegundos");

      interval = setInterval(() => {
        segundosTranscurridos++;
        contadorSegundosElement.textContent = segundosTranscurridos + " segundos";
        console.log(segundosTranscurridos);

        if (segundosTranscurridos === 10 && !dialogClosedByCancel) {
          clearInterval(interval);
          generarNuevoToken();
        }
      }, 1000);
    },
    preConfirm: () => {
      const inputElement = Swal.getPopup().querySelector("input");
      inputElement.select();
      inputElement.setSelectionRange(0, 99999); 
      document.execCommand("copy");
      Swal.showValidationMessage("Token copiado al portapapeles");
      clearTimeout(tokenTimeout);
      segundosTranscurridos = 0;
    },
  }).then((result) => {
    clearInterval(interval);
    if (!dialogClosedByCancel) {
      tokenTimeout = setTimeout(generarNuevoToken, 30000);
    }
  });
}

/////////////////////////////////////////FUNCIONES LOGICAS////////////////////////////////////////////////////////

/// Sumar dinero a la cuenta
function sumarDinero(dinero) {
  cliente.saldoCuenta += dinero;
  actualizarSaldoEnAlmacenamiento();
}

// Restar dinero de la cuenta
function restarDinero(dinero) {
  cliente.saldoCuenta -= dinero;
  actualizarSaldoEnAlmacenamiento();
}

// Actualizar el saldo en pantalla
function actualizarSaldoEnPantalla() {
  const saldoEnPantalla = document.getElementById("saldo-cuenta");
  saldoEnPantalla.innerText = "$" + separadorDeMiles(cliente.saldoCuenta);
}

// Función para obtener el saldo almacenado en el almacenamiento local
function obtenerSaldoDeAlmacenamiento() {
  const clienteJSON = localStorage.getItem("cliente");
  if (clienteJSON) {
    const cliente = JSON.parse(clienteJSON);
    return cliente.saldoCuenta;
  } else {
    return null;
  }
}

// Función para actualizar el saldo en el almacenamiento local
function actualizarSaldoEnAlmacenamiento() {
  const clienteJSON = JSON.stringify(cliente);
  localStorage.setItem("cliente", clienteJSON);
}

// Actualizo el límite de extracción en pantalla
function actualizarLimiteEnPantalla() {
  let limiteEnPantalla = document.getElementById("limite-extraccion");
  const clienteGuardado = JSON.parse(localStorage.getItem("cliente"));
  let limiteExtraccion = clienteGuardado.limiteExtraccion;
  limiteEnPantalla.innerText = "Tu límite de extracción es: $" + separadorDeMiles(limiteExtraccion);
}


// Verifico si hay saldo suficiente en la cuenta
function haySaldoEnLaCuenta(dinero) {
  return cliente.saldoCuenta >= dinero;
}

// Verifico si el monto a extraer supera el límite de extracción
function superaLimiteDeExtraccion(dinero) {
  return dinero > cliente.limiteExtraccion;
}

// Verifico si el monto a extraer es múltiplo de 100
function esMultiploDe100(dinero) {
  return dinero % 100 === 0;
}

// Calculo el interés para un plazo fijo
function calcularPlazoFijo(monto, dias) {
  const tasaInteres = 0.03; // Tasa de interés fija del 3%
  return monto * tasaInteres * (dias / 365);
}

// Cargar nombre en pantalla
function cargarNombreEnPantalla() {
  let nombreEnPantalla = document.getElementById("nombre");
  let nombreMayus = cliente.nombreUsuario.toUpperCase();
  nombreEnPantalla.innerText = "¡HOLA, " + nombreMayus + "!";
}

function cargarVisual() {

  loginButton.style.display = "none";
  botonLocal.style.display = "block"; // Hago visible el botón Eliminar Local Storage
  botonSesion.style.display = "block"; //  Hago visible el botón Eliminar Sesion Storage

  let contenidoSaldo = document.getElementById("titulo-cuenta");
  contenidoSaldo.innerHTML = "Tu Saldo es:";

  let contenidoExtraccion = document.getElementById("limite-extraccion");
  contenidoExtraccion.innerHTML = "Tu límite de extracción es:";

  let pantallaBanner = document.getElementById("pantallaBanner");
  pantallaBanner.style.display = "none";
  pantallaDatos.style.display = "block";
  pantallaHistorial.style.display = "block";
}

const btnBorrarStorage = document.getElementById("btnBorrarStorage");
btnBorrarStorage.onclick = () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción borrará todo el almacenamiento local. No podrás recuperar los datos borrados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: "Borrado Exitoso",
        text: "Se ha borrado todo el almacenamiento local.",
        icon: "success",
      }).then(() => location.reload()); // Recargo la ventana después del borrado
    }
  });
};

const btnBorrarSession = document.getElementById("btnBorrarSession");
btnBorrarSession.onclick = () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción cerrará la sesión y borrará todo el almacenamiento de sesión. No podrás recuperar los datos borrados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, cerrar sesión",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.clear();
      Swal.fire({
        title: "Sesión Cerrada",
        text: "Se ha cerrado la sesión y borrado todo el almacenamiento de sesión.",
        icon: "success",
      }).then(() => location.reload()); // Recargo la ventana después del cierre de sesión
    }
  });
  agregarRegistroHistorial(`Se ha cerrado la sesión - ${fechaActual}`);

};

// Función para agregar un registro al historial
function agregarRegistroHistorial(mensaje) {
  let historial = document.getElementById("historial");
  historial.innerHTML += "<li class='logs'>" + mensaje + "</li>";

  // Obtengo el historial actual del almacenamiento local
  let historialGuardado = localStorage.getItem("historial");
  let historialActualizado = [];

  // Si hay un historial guardado, convertirlo de JSON a objeto JavaScript
  if (historialGuardado) {
    historialActualizado = JSON.parse(historialGuardado);
  }

  // Agregar el nuevo registro al historial actualizado
  historialActualizado.push(mensaje);

  // Guardar el historial actualizado en el almacenamiento local
  localStorage.setItem("historial", JSON.stringify(historialActualizado));
}

// Obtener el historial guardado del almacenamiento local
let historialGuardado = localStorage.getItem("historial");

// Si hay un historial guardado, mostrarlo en la pantalla
if (historialGuardado) {
  let historialActualizado = JSON.parse(historialGuardado);
  let historial = document.getElementById("historial");
  historialActualizado.forEach((mensaje) => {
    historial.innerHTML += "<li class='logs'>" + mensaje + "</li>";
  });
}

restaurarSesion();