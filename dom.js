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