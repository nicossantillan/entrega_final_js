// OBJETOS
class Granos{
    constructor (nombre, tostado, cuerpo, notas, acidez){
        this.nombre = nombre;
        this.tostado = tostado;
        this.cuerpo = cuerpo;
        this.notas = notas
        this.acidez = acidez;
        this.info = `Estos granos son llamados ${nombre}. Es de tostado ${tostado} y su cuerpo es ${cuerpo}. Sus notas varian entre ${notas} y su acidez es ${acidez}.`
    }
    verInfo(){
        alert(this.info);
    }
}
const granosDeCafe = {
    rwanda : new Granos ("Rwanda", "rubio", "ligero", "fresco y citrico", "alta"),
    nicaragua : new Granos ("Nicaragua", "oscuro", "completo", "vivo y acaramelado", "media"),
    guatemala : new Granos ("Guatemala", "medio", "completo", "jugoso y complejo", "alta"),
    ethiopia : new Granos ("Ethiopia", "oscuro", "completo", "terroso y herbal", "baja"),
    
};

// FUNCIONES
function MostrarGranos(){
    switch(mostrarGranos){
        case "1":
        granoElegido = "willow";
        alert(granosDeCafe[granoElegido].info);
        break;
        
        case "2":
        granoElegido = "colombia";
        alert(granosDeCafe[granoElegido].info);
        break;

        case "3":
        granoElegido = "espresso";
        alert(granosDeCafe[granoElegido].info);
        break;

        case "4":
        granoElegido = "kenya";
        alert(granosDeCafe[granoElegido].info);
        break;

        case "5":
        granoElegido = "sumatra";
        alert(granosDeCafe[granoElegido].info);
        break;

        case "0":
        break;
        
        default:
            alert("Ingrese una opción correcta");
    }
}
function verGranos(){
    if (menuPrincipal == 1){
        mostrarGranos = prompt("Elegir grano a gusto. Ingrese el número correcto: \n1- Rwanda  \n2- Nicaragua  \n3- Guatemala  \n4- Ethiopia  \n0- SALIR");
        MostrarGranos();
        let agregarCafeACarrito;
        if(typeof granoElegido === 'string'){
            agregarCafeACarrito = prompt("¿Quieres agregar los granos " + granoElegido + " a tu carrito? Ingrese SI para aceptar, o NO para volver");
            agregarCafeACarrito.toLowerCase();
        
            if(agregarCafeACarrito == "si"){
                carrito.push(granoElegido)
            }
            else if (agregarCafeACarrito == "no"){
                return;
            }
            else{
                alert("Ingrese una opción correcta");
            }
        }
        granoElegido = null;
    }
}
function buscarGranos(){
    resultadoDeBusqueda = [];
    if (menuPrincipal == 2){
        let granoABuscar = prompt("¿Qué tipo de grano estaba buscando?");

        for(const cafe in granosDeCafe){
            if(granosDeCafe[cafe].nombre.toLowerCase() === granoABuscar.toLowerCase()){
                resultadoDeBusqueda.push(granosDeCafe[cafe]);
            }
        }

        if (resultadoDeBusqueda.length > 0) {
            for (const resultado of resultadoDeBusqueda) {
                resultado.verInfo()


                agregarCafeACarrito = prompt("¿Quieres agregar los granos " + granoABuscar.toLowerCase() + " a tu carrito? Ingrese SI para aceptar, o NO para volver");
                agregarCafeACarrito.toLowerCase();
                if(agregarCafeACarrito == "si"){
                    carrito.push(granoABuscar)
            }
            else if (agregarCafeACarrito == "no"){
                break;
            }
            else{
                alert("Ingrese una opción correcta");
            }
        } 
        }
        else {
            alert("No se encontraron resultados para " + granoABuscar);
        };
    }
}
function teAyudoAElegir(){
    resultadoDeBusqueda = [];
    if (menuPrincipal == 3){
        let granoABuscar= prompt("¿Qué intensidad prefiere en su café?:\n  Suave || Media || Alta");
        granoABuscar = granoABuscar.toLowerCase();
        if(granoABuscar == "suave"){
            for(const cafe in granosDeCafe){
                if(granosDeCafe[cafe].tostado.toLowerCase() === "rubio"){
                    resultadoDeBusqueda.push(granosDeCafe[cafe]);
                }
            }
        }
        else if(granoABuscar == "media"){
            for(const cafe in granosDeCafe){
                if(granosDeCafe[cafe].tostado.toLowerCase() === "medio"){
                    resultadoDeBusqueda.push(granosDeCafe[cafe]);
                }
            }
        }
        else if(granoABuscar == "alta"){
            for(const cafe in granosDeCafe){
                if(granosDeCafe[cafe].tostado.toLowerCase() === "oscuro"){
                    resultadoDeBusqueda.push(granosDeCafe[cafe]);
                }
            }
        }

        if (resultadoDeBusqueda.length > 0) {
            for (const resultado of resultadoDeBusqueda) {
                let opciones = "Opciones disponibles:\n";

                for (const resultado of resultadoDeBusqueda) {
                    opciones += `- ${resultado.nombre}\n`;
                }
                alert(opciones);
                agregarCafeACarrito= prompt("¿Quieres agregar los granos " + resultado.nombre + " a tu carrito? Ingrese SI para aceptar, o NO para volver")
                agregarCafeACarrito.toLowerCase();
                if(agregarCafeACarrito == "si" || agregarCafeACarrito == "Si" || agregarCafeACarrito == "SI"){
                    carrito.push(resultado.nombre)
            }
            else if (agregarCafeACarrito == "no"){
                break;
            }
            else{
                alert("Ingrese una opción correcta");
            }
        } 
        }
        else {

            alert("No se encontraron resultados para " + granoABuscar);
        };
    }
}
function verCarrito(){
    if (menuPrincipal == 4){
        let miCarrito = "Usted agregó al carrito los siguientes granos de café:\n"
        for (const resultado of carrito) {
            miCarrito += `- ${resultado} x 250grs\n`;
        }
        alert(miCarrito);
    }

}


// INICIO DEL PROGRAMA
let mostrarGranos;
let granoElegido;
let resultadoDeBusqueda = [];
const carrito = []

alert("¡Hola! Bienvenidos a Virtual Coffee Experience.");
let menuPrincipal = parseInt(prompt("¿Que desea hacer? Ingrese el número correcto:\n1- Ver granos de café\n2- Buscar un grano específico \n3- Te ayudo a elegir \n4- Ver carrito\n  \n0- SALIR"))

while(true){
    if(menuPrincipal > 0 && menuPrincipal <= 4){

        verGranos();
        buscarGranos();
        teAyudoAElegir();
        verCarrito();
        menuPrincipal = parseInt(prompt("¿Que desea hacer? Ingrese el número correcto:\n1- Ver granos de café\n2- Buscar un grano específico \n3- Te ayudo a elegir \n4- Ver carrito\n  \n0- SALIR"))

}
else if(menuPrincipal == 0){
    break;
}
else{
    alert("Ingrese una opción correcta");
    menuPrincipal = parseInt(prompt("¿Que desea hacer? Ingrese el número correcto:\n1- Ver granos de café\n2- Buscar un grano específico \n3- Te ayudo a elegir \n4- Ver carrito\n  \n0- SALIR"))
}
}



console.log(carrito);