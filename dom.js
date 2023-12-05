//LOCALE STORAGE Y JSON 


// OBJETOS
class Granos{
  constructor (nombre, tostado, cuerpo, notas, acidez, imagen){
      this.nombre = nombre;
      this.tostado = tostado;
      this.cuerpo = cuerpo;
      this.notas = notas;
      this.acidez = acidez;
      this.imagen = imagen;
      this.info = `Estos granos son llamados ${nombre}. Es de tostado ${tostado} y su cuerpo es ${cuerpo}. Sus notas varian entre ${notas} y su acidez es ${acidez}.`
  }
  verInfo(){
      alert(this.info);
  }
}
const granosDeCafe = {
  rwanda : new Granos ("Rwanda", "rubio", "ligero", "fresco y citrico", "alta", "./assets/img/rwanda.jpg"),
  nicaragua : new Granos ("Nicaragua", "oscuro", "completo", "vivo y acaramelado", "media", "./assets/img/nicaragua.jpg"),
  guatemala : new Granos ("Guatemala", "medio", "completo", "jugoso y complejo", "alta", "./assets/img/guatemala.jpg"),
  ethiopia : new Granos ("Ethiopia", "oscuro", "completo", "terroso y herbal", "baja", "./assets/img/ethiopia.jpg"),
};


//Menu Hamburguesa
const button = document.querySelector('i');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
  nav.classList.toggle('activo');
});

//TE AYUDAMOS A ELEGIR

const rubio = document.getElementById('rubio');
const medio = document.getElementById('medio');
const oscuro = document.getElementById('oscuro');
const section4 = document.getElementById('section4');

rubio.addEventListener("click", () => {
  // Iterar sobre las claves (nombres de los granos) en granosDeCafe
  for (const nombreGrano in granosDeCafe) {
    // Verificar si el nombre del grano coincide con la entrada del usuario
    if ("rubio" === granosDeCafe[nombreGrano].tostado) {
      Swal.fire({
        title: granosDeCafe[nombreGrano].nombre,
        html: `
          <img src="${granosDeCafe[nombreGrano].imagen}" alt="${granosDeCafe[nombreGrano].nombre}" style="max-width: 100%;">
          <p>${granosDeCafe[nombreGrano].info}</p>
        `,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Lógica para procesar la compra si es necesario
          Swal.fire('Compra realizada!', 'Gracias por tu compra.', 'success');
        }
      });
    }
  }
});

medio.addEventListener("click", () => {

  for (const nombreGrano in granosDeCafe) {

    if ("medio" === granosDeCafe[nombreGrano].tostado) {
      Swal.fire({
        title: granosDeCafe[nombreGrano].nombre,
        html: `
          <img src="${granosDeCafe[nombreGrano].imagen}" alt="${granosDeCafe[nombreGrano].nombre}" style="max-width: 100%;">
          <p>${granosDeCafe[nombreGrano].info}</p>
        `,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar',
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire('Compra realizada!', 'Gracias por tu compra.', 'success');
        }
      });
    }
  }
});
oscuro.addEventListener("click", () => {

  for (const nombreGrano in granosDeCafe) {

    if ("oscuro" === granosDeCafe[nombreGrano].tostado) {
      Swal.fire({
        title: granosDeCafe[nombreGrano].nombre,
        html: `
          <img src="${granosDeCafe[nombreGrano].imagen}" alt="${granosDeCafe[nombreGrano].nombre}" style="max-width: 100%;">
          <p>${granosDeCafe[nombreGrano].info}</p>
        `,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar',
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire('Compra realizada!', 'Gracias por tu compra.', 'success');
        }
      });
    }
  }
});


//  VER GRANOS
function renderizarProductos() {
  const granosSeleccionados = document.getElementById("granosSeleccionados");
  granosSeleccionados.innerHTML = "";

  for (const key in granosDeCafe) {
    if (granosDeCafe.hasOwnProperty(key)) {
      const producto = granosDeCafe[key];

      // Crear elementos dinámicamente
      const divPadre = document.createElement("div");

      const img = document.createElement("img");
      img.setAttribute("src", producto.imagen);

      const divCard = document.createElement("div");
      divCard.className = "content-details fadeIn";

      const h3 = document.createElement("h3");
      h3.innerText = producto.nombre;

      const p = document.createElement("p");
      p.innerText = producto.info;

      // Insertar elementos dentro de otros
      divCard.append(h3, p);
      divPadre.append(img, divCard);
      granosSeleccionados.append(divPadre);
    }
  }
}

renderizarProductos();

//BUSCAR GRANOS

const botonBusqueda = document.getElementById("botonBusqueda");
botonBusqueda.addEventListener("click", () => {
  const input = document.getElementById("barraBusqueda").value;
  let granoEncontrado = false;

  for (const nombreGrano in granosDeCafe) {
    if (input.toLowerCase() === granosDeCafe[nombreGrano].nombre.toLowerCase()) {
      Swal.fire({
        title: granosDeCafe[nombreGrano].nombre,
        html: `
          <img src="${granosDeCafe[nombreGrano].imagen}" alt="${granosDeCafe[nombreGrano].nombre}" style="max-width: 100%;">
          <p>${granosDeCafe[nombreGrano].info}</p>
        `,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra realizada!', 'Gracias por tu compra.', 'success');
        }
      });
      granoEncontrado = true;
      break; 
    }
  }

  if (!granoEncontrado) {
    Swal.fire({
      icon: "error",
      title: "No tenemos ese grano",
      text: "Prueba con: nicaragua, ethiopia, guatemala, rwanda",
      footer: '¡Ve a buscar más granos!'
    });
  }
});
