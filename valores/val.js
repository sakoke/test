
document.addEventListener("DOMContentLoaded", function() {
    consejos_emocional();
    consejos_desper();
    consejos_personal();
    nivel_desper();
    nivel_emocional();
    nivel_personal();
});

function consejos_emocional(){
    console.log("valor de total_emocional");
    console.log(total_emocional);

    if(total_emocional<=18){
        const consejos = document.getElementById("consejos_can");
        consejos.textContent="Consejos para cada nivel";
    }else{
        if((total_emocional>=19) && (total_emocional<=36)){
            const consejos = document.getElementById("consejos_can");
            consejos.textContent="Consejos para cada nivel";
        }else{
            const consejos = document.getElementById("consejos_can");
            consejos.textContent="Consejos para cada nivel";
        }
    }
}

function consejos_desper(total_desper){
    if(total_desper<=10){
        const consejos = document.getElementById("consejos_des");
        consejos.textContent="Consejos para cada nivel";
    }else{
        if((total_desper>=11) && (total_desper<=20)){
            const consejos = document.getElementById("consejos_des");
            consejos.textContent="Consejos para cada nivel";
        }else{
            const consejos = document.getElementById("consejos_des");
            consejos.textContent="Consejos para cada nivel";
        }
    }
}

function consejos_personal(total_personal){
    if(total_personal<=16){
        const consejos = document.getElementById("consejos_rea");
        consejos.textContent="Consejos para cada nivel";
    }else{
        if((total_personal>=17) && (total_personal<=32)){
            const consejos = document.getElementById("consejos_rea");
            consejos.textContent="Consejos para cada nivel";
        }else{
            const consejos = document.getElementById("consejos_rea");
            consejos.textContent="Consejos para cada nivel";
        }
    }
}

function nivel_emocional(){
    const niv_emo = document.getElementById("nivel_can");
    if(total_emocional<=18){
        niv_emo.textContent="Nivel Bajo";
    }else{
        if((total_emocional>=19) && (total_emocional<=36)){
            niv_emo.textContent="Nivel Medio";
        }else{
            niv_emo.textContent="Nivel Alto";
        }
    }
}

function nivel_desper(total_desper){
    const niv_desper = document.getElementById("nivel_des");
    if(total_desper<=10){
        niv_desper.textContent="Nivel Bajo";
    }else{
        if((total_desper>=11) && (total_desper<=20)){
            niv_desper.textContent="Nivel Medio";
        }else{
            niv_desper.textContent="Nivel Alto";
        }
    }
}

function nivel_personal(total_personal) {
    const niv_per = document.getElementById("nivel_rea");
    
    if (total_personal <= 16) {
        niv_per.textContent = "Nivel Bajo";
    } else if (total_personal <= 32) {
        niv_per.textContent = "Nivel Medio";
    } else {
        niv_per.textContent = "Nivel Alto";
    }
}