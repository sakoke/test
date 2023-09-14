let total_emocional=0;
let total_desper=0;
let total_personal=0;

function respuesta_emocional(num_pregunta, seleccionada){
    total_emocional = total_emocional + parseInt(seleccionada.value, 10);

    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor="white";
    labels[5].style.backgroundColor="white";
    labels[7].style.backgroundColor="white";
    labels[9].style.backgroundColor="white";
    labels[11].style.backgroundColor="white";
    labels[13].style.backgroundColor="white";
    labels[15].style.backgroundColor="white";
    seleccionada.parentNode.style.backgroundColor = "rgba(194, 197, 197, 0.911)"
}

function respuesta_desper(num_pregunta, seleccionada){
    total_desper = total_desper + parseInt(seleccionada.value, 10);

    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor="white";
    labels[5].style.backgroundColor="white";
    labels[7].style.backgroundColor="white";
    labels[9].style.backgroundColor="white";
    labels[11].style.backgroundColor="white";
    labels[13].style.backgroundColor="white";
    labels[15].style.backgroundColor="white";
    seleccionada.parentNode.style.backgroundColor = "rgba(194, 197, 197, 0.911)"
}

function respuesta_personal(num_pregunta, seleccionada){
    total_personal = total_personal + parseInt(seleccionada.value, 10);

    id="p" + num_pregunta;
    
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor="white";
    labels[5].style.backgroundColor="white";
    labels[7].style.backgroundColor="white";
    labels[9].style.backgroundColor="white";
    labels[11].style.backgroundColor="white";
    labels[13].style.backgroundColor="white";
    labels[15].style.backgroundColor="white";
    seleccionada.parentNode.style.backgroundColor = "rgba(194, 197, 197, 0.911)"
}

function corregir(){
    document.getElementById("emocional").innerHTML = total_emocional;
    document.getElementById("desperpersonalizacion").innerHTML = total_desper;
    document.getElementById("personal").innerHTML = total_personal;

    window.open('valores/valores.html');
}
