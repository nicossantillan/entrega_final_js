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
  const divPadre = document.createElement("div");
  divPadre.className = "opcion1";

  const img = document.createElement("img");

  img.setAttribute("src", "./assets/img/rwanda.jpg");
  img.setAttribute("alt", "Café Rwanda");
  
  const divCardBody = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.innerText = "Café Rwanda";

  const p = document.createElement("p");
  p.innerHTML = "Hola este es un muy buen cafe par alos amantes del cafe que les gusta y amana tomar cafe todos y cada uno de los dias de su vida!";

  const button = document.createElement("button");
  button.innerText = "Comprar";


  divCardBody.append(h3, p, button);
  divPadre.append(img, divCardBody);
  section4.append(divPadre);
})

medio.addEventListener("click", () => {
  const divPadre = document.createElement("div");
  divPadre.className = "opcion1";

  const img = document.createElement("img");

  img.setAttribute("src", "./assets/img/nicaragua.jpg");
  img.setAttribute("alt", "Café Rwanda");
  
  const divCardBody = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.innerText = "Café Nicaragua";

  const p = document.createElement("p");
  p.innerHTML = "Hola este es un muy buen cafe par alos amantes del cafe que les gusta y amana tomar cafe todos y cada uno de los dias de su vida!";

  const button = document.createElement("button");
  button.innerText = "Comprar";


  divCardBody.append(h3, p, button);
  divPadre.append(img, divCardBody);
  section4.append(divPadre);
})

oscuro.addEventListener("click", () => {
  const divPadre = document.createElement("div");
  divPadre.className = "opcion1";

  const img = document.createElement("img");

  img.setAttribute("src", "./assets/img/guatemala.jpg");
  img.setAttribute("alt", "Café Rwanda");
  
  const divCardBody = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.innerText = "Café Guatemala";

  const p = document.createElement("p");
  p.innerHTML = "Hola este es un muy buen cafe par alos amantes del cafe que les gusta y amana tomar cafe todos y cada uno de los dias de su vida!";

  const button = document.createElement("button");
  button.innerText = "Comprar";
  button.setAttribute("id", "comprar")
  //AGREGAR EVENTO AL BOTON PARA QUE SE AÑADA EL CAFE AL CARRITO.


  divCardBody.append(h3, p, button);
  divPadre.append(img, divCardBody);
  section4.append(divPadre);
})


//  VER GRANOS
// function renderizarProductos(granosDeCafe) {

//   const granosSeleccionados = document.getElementById("granosSeleccionados");
//   granosSeleccionados.innerHTML = "";

//   for(const producto of granosDeCafe) {

//       // Creamos los elementos dinámicamente
//       const divPadre = document.createElement("div");

//       const aTag = document.createElement("a");
//       aTag.setAttribute("href","");

//       const img = document.createElement("img")
//       img.setAttribute("src", `${granosDeCafe.imagen}` );

//       const divCard = document.createElement("div");
//       divCard.className = "content-details fadeIn";

//       const h3 = document.createElement("h3");
//       h3.innerText = granosDeCafe.nombre;

//       const p = document.createElement("p");
//       p.innerText = granosDeCafe.info;


//       // Insertar elementos adentro de otro
//       divCard.append(h3, p);
//       divPadre.append(divCard);
//       granosSeleccionados.append(divPadre);
//   }
// }
// renderizarProductos();
function renderizarProductos() {
  const granosSeleccionados = document.getElementById("granosSeleccionados");
  granosSeleccionados.innerHTML = "";

  for (const key in granosDeCafe) {
    if (granosDeCafe.hasOwnProperty(key)) {
      const producto = granosDeCafe[key];

      // Crear elementos dinámicamente
      const divPadre = document.createElement("div");

      const aTag = document.createElement("a");
      aTag.setAttribute("href", "");

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