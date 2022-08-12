
// INFORMACION BASICA DEL CV

$(document).ready(function(){

    info_cabecera();
    info_lateralI();
    info_lateralD();
    info_habilid();
    info_Educacion();
    
});


//FUNCIONES PARA REEMPLAZAR / UBICAR IMFORMACION

//INFORMACION CENTRAL - CABECERA
function info_cabecera(){
    
    var nombre = "German Leon Andy";
    var especialidad = "Desarrollador";

    document.getElementById("nombre").innerText =nombre;
    document.getElementById("especialidad").innerHTML =especialidad;

    document.getElementById("des_cv")

}

//INFORMACION CENTRAL - CUERPO

//BASICA - LATERAL IQUIERDO
function info_lateralI(){
    var sobre_mi = "Hola, mi nombre es Andy German, soy un aficionado a la Fotografía, Diseño grafico, desarrollo de sitios Web - Frontend y"
    +" Desarrollador de aplicaciones mobiles android ambientadas en el lenguaje de programacion Java."
    +" Estoy por obtener un tecnologo en desarrollo de software y me destaco por adaptarme al trabajo en equipo."

    document.getElementById("aboud").innerText =sobre_mi;
}

//BASICA - LATERAL DERECHO
function info_lateralD(){
    var ciudad_pais = "Guayas/Ecuador";
    var direccion = "Salitre/coop.Buenos aires";
    var fecha_nac = "22 julio, 2001";
    var email = "andygerman73@gmail.com";
    var celular = "+593 98 910 9041";
    var idioma = "Español";

    document.getElementById("ciudad_pais").innerText =ciudad_pais;
    document.getElementById("direccion").innerText =direccion;
    document.getElementById("f_cumple").innerText =fecha_nac;
    document.getElementById("email").innerText =email;
    document.getElementById("celular").innerText =celular;
    document.getElementById("idioma").innerText =idioma;
    
}

//HABILIDADES
function info_habilid(){
    var habilidades = ["Fotografía", "Canva", "PicsArt", "Desarrollo Web - Frontend", "Desarrollo Web - Backend", "Desarrollo Aplicaciones Mobiles"]
    document.getElementById("espe0").innerText =habilidades[0];
    document.getElementById("espe1").innerText =habilidades[1];
    document.getElementById("espe2").innerText =habilidades[2];
    document.getElementById("espe3").innerText =habilidades[3];
    document.getElementById("espe4").innerText =habilidades[4];
    document.getElementById("espe5").innerText =habilidades[5];
}

//EDUCACION
function info_Educacion(){
    var edu_prim = ["Unidad Educativa Francisco Iñiguez", "..."] //Nombre de institucion | Especialidad
    var edu_sec = ["Unida Educativa Tecnica Agropecuaria 27 de Noviembre", "Bachiller - Tecnico Agropecuario"] //Nombre de institucion | Especialidad
    var edu_ter = ["Instituto Tecnologico Juan Bautista Aguirre - ISTJBA", "Bachiller - Tecnología Superior en Desarrollo de Software"] //Nombre de institucion | Especialidad
    
    //primaria
    document.getElementById("institucion0").innerText =edu_prim[0];

    //secundaria
    document.getElementById("institucion1").innerText =edu_sec[0];
    document.getElementById("espeAcam1").innerText =edu_sec[1];

    //Titulo 3er nivel
    document.getElementById("institucion2").innerText =edu_ter[0];
    document.getElementById("espeAcam2").innerText =edu_ter[1];
}





