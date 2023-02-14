let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculta el menu una vez que se seleccione una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    var skills2 = document.getElementById("skills2");
    var distancia_skills2 = window.innerHeight - skills2.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        let habilidades2 = document.getElementsByClassName("progreso2");
        habilidades2[0].classList.add("comunicacion");
        habilidades2[1].classList.add("equipo");
        habilidades2[2].classList.add("creatividad");
        habilidades2[3].classList.add("dedicacion");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("node");
        habilidades[5].classList.add("backend");
        habilidades[6].classList.add("python");
        habilidades[7].classList.add("algoritmo");
    } 
}
// Detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}