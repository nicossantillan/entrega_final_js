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
      const section4 = document.getElementById("section4");

      const divPadre = document.createElement("div");
      divPadre.className = "opcion1";
    
      const img = document.createElement("img");
    
      img.setAttribute("src", granosDeCafe[nombreGrano].imagen);
      img.setAttribute("alt", granosDeCafe[nombreGrano].nombre);
      
      const divCardBody = document.createElement("div");
    
      const h3 = document.createElement("h3");
      h3.innerText = granosDeCafe[nombreGrano].nombre;
    
      const p = document.createElement("p");
      p.innerHTML = granosDeCafe[nombreGrano].info;
    
      const button = document.createElement("button");
      button.innerText = "Comprar";
    
    
      divCardBody.append(h3, p, button);
      divPadre.append(img, divCardBody);
      section4.append(divPadre);
    }
  }
});

medio.addEventListener("click", () => {
  // Iterar sobre las claves (nombres de los granos) en granosDeCafe
  for (const nombreGrano in granosDeCafe) {
    // Verificar si el nombre del grano coincide con la entrada del usuario
    if ("medio" === granosDeCafe[nombreGrano].tostado) {
      const section4 = document.getElementById("section4");

      const divPadre = document.createElement("div");
      divPadre.className = "opcion1";
    
      const img = document.createElement("img");
    
      img.setAttribute("src", granosDeCafe[nombreGrano].imagen);
      img.setAttribute("alt", granosDeCafe[nombreGrano].nombre);
      
      const divCardBody = document.createElement("div");
    
      const h3 = document.createElement("h3");
      h3.innerText = granosDeCafe[nombreGrano].nombre;
    
      const p = document.createElement("p");
      p.innerHTML = granosDeCafe[nombreGrano].info;
    
      const button = document.createElement("button");
      button.innerText = "Comprar";
    
    
      divCardBody.append(h3, p, button);
      divPadre.append(img, divCardBody);
      section4.append(divPadre);

       // Detener la búsqueda después de encontrar la coincidencia
    }
  }
});
oscuro.addEventListener("click", () => {
  // Iterar sobre las claves (nombres de los granos) en granosDeCafe
  for (const nombreGrano in granosDeCafe) {
    // Verificar si el nombre del grano coincide con la entrada del usuario
    if ("oscuro" === granosDeCafe[nombreGrano].tostado) {
      const section4 = document.getElementById("section4");

      const divPadre = document.createElement("div");
      divPadre.className = "opcion1";
    
      const img = document.createElement("img");
    
      img.setAttribute("src", granosDeCafe[nombreGrano].imagen);
      img.setAttribute("alt", granosDeCafe[nombreGrano].nombre);
      
      const divCardBody = document.createElement("div");
    
      const h3 = document.createElement("h3");
      h3.innerText = granosDeCafe[nombreGrano].nombre;
    
      const p = document.createElement("p");
      p.innerHTML = granosDeCafe[nombreGrano].info;
    
      const button = document.createElement("button");
      button.innerText = "Comprar";
    
    
      divCardBody.append(h3, p, button);
      divPadre.append(img, divCardBody);
      section4.append(divPadre);

       // Detener la búsqueda después de encontrar la coincidencia
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

  // Iterar sobre las claves (nombres de los granos) en granosDeCafe
  for (const nombreGrano in granosDeCafe) {
    // Verificar si el nombre del grano coincide con la entrada del usuario
    if (input.toLowerCase() === granosDeCafe[nombreGrano].nombre.toLowerCase()) {
      const section3 = document.getElementById("section3");

      const divPadre = document.createElement("div");
      divPadre.className = "opcion1";
    
      const img = document.createElement("img");
    
      img.setAttribute("src", granosDeCafe[nombreGrano].imagen);
      img.setAttribute("alt", granosDeCafe[nombreGrano].nombre);
      
      const divCardBody = document.createElement("div");
    
      const h3 = document.createElement("h3");
      h3.innerText = granosDeCafe[nombreGrano].nombre;
    
      const p = document.createElement("p");
      p.innerHTML = granosDeCafe[nombreGrano].info;
    
      const button = document.createElement("button");
      button.innerText = "Comprar";
    
    
      divCardBody.append(h3, p, button);
      divPadre.append(img, divCardBody);
      section3.append(divPadre);

      return; // Detener la búsqueda después de encontrar la coincidencia
    }
  }

  // Si llegamos aca, no se encontró ninguna coincidencia
  console.log("No se encontró ningún grano con el nombre:", input);
});


//AGREGAR A CARRITO 
