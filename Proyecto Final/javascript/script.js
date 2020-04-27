function myFunction() {
    var Name=document.getElementById("Name").value;
    var Phone=document.getElementById("Phone").value;
    var textArea=document.getElementById ("textArea").value;
    var obj= {
        Nombre: Name,
        Telefono: Phone,
        Comentarios:textArea
    };
    console.log(obj);
}

/*Usuario */

function user(){
    x=document.getElementById("user").value
    if (x==1){
        $(".log_in").show();
        $(".log_in").animate({
            height:"300px",
        },150)
        //desabilitar el botón hasta que se termine la transicion para que no haya bug
        document.getElementById("user").disabled=true
        setTimeout(function(){
            document.getElementById("user").disabled=false
        },200)
        //cambiar propiedades
        document.getElementById("user").style.backgroundColor="white"
        document.getElementById("user").value="2"
        document.getElementById("user").innerHTML="Cerrar"
        document.getElementById("user").style.color="black"
        document.getElementById("header").style.borderBottom="2px solid white"
    }
    else {
        $(".log_in").animate({
            height:"0px",
        },150)
        $(".log_in").hide(0)
        //desabilitar el botón hasta que se termine la transicion para que no haya bug
        document.getElementById("user").disabled=true
        setTimeout(function(){
            document.getElementById("user").disabled=false
        },200)
        //hasta que no se termine la transición principal, no se cambiaran las sig propiedades
        setTimeout(function(){
            document.getElementById("user").style.backgroundColor="rgb(237, 252, 110)"
            document.getElementById("user").style.color="rgb(170, 125, 0)"
            document.getElementById("header").style.borderBottom="none"
        },150)
        document.getElementById("user").innerHTML="Iniciar sesión"
        document.getElementById("user").value="1"

    }
}
function log_in(){
    var name=document.getElementById("user_name").value
    var pass=document.getElementById("password").value

    //En caso de no haya escrito nada
    if (name==""&&pass==""){
        //user
        document.getElementById("user_name").style.border="2px solid red"
        document.getElementById("alert_user").innerHTML="Escribe el nombre de usuario"
        document.getElementById("alert_user").style.display="block"
        //password
        document.getElementById("password").style.border="2px solid red"
        document.getElementById("alert_password").innerHTML="Escribe la contraseña"
        document.getElementById("alert_password").style.display="block"
    }

    //En caso de que solo haya escrito la contraseña
    else if (name==""&&pass!=""){
        //user
        document.getElementById("user_name").style.border="2px solid red"
        document.getElementById("alert_user").innerHTML="Escribe el nombre de usuario"
        document.getElementById("alert_user").style.display="block"
        //password
        document.getElementById("password").style.border="2px outset rgb(89, 160, 253)"
        document.getElementById("alert_password").style.display="none"
    }

    //En caso de que solo haya escrito el usuario
    else if (name=="Alex03"&&pass==""){
        //password
        document.getElementById("password").style.border="2px solid red"
        document.getElementById("alert_password").innerHTML="Escribe la contraseña"
        document.getElementById("alert_password").style.display="block"
        //user
        document.getElementById("user_name").style.border="2px outset rgb(97, 255, 97)"
        document.getElementById("alert_user").style.display="none"
    }
    //En caso de que el usuario sea incorrecto
    else if (name!="Alex03"){
        //user
        document.getElementById("user_name").style.border="2px solid red"
        document.getElementById("alert_user").style.display="block"
        document.getElementById("alert_user").innerHTML="El nombre de usuario no existe"               
    }
    //En caso de que la contraseña sea incorrecta
    else if(name=="Alex03"&&pass!="codellege"){
        //password
        document.getElementById("password").style.border="2px solid red"
        document.getElementById("alert_password").style.display="block"
        document.getElementById("alert_password").innerHTML="La contraseña es incorrecta"
        //user
        document.getElementById("user_name").style.border="2px outset rgb(97, 255, 97)"
        document.getElementById("alert_user").style.display="none"
    }

    //en caso de que todo esté bien              
    else if (name=="Alex03"&&pass=="codellege"){
        //password
        document.getElementById("password").style.border="2px outset rgb(97, 255, 97)"
        document.getElementById("alert_password").style.display="none"
        //user
        document.getElementById("user_name").style.border="2px outset rgb(97, 255, 97)"
        document.getElementById("alert_user").style.display="none"
        //cursor
        document.getElementById("body").style.cursor="progress";
        document.getElementById("send").style.cursor="progress";
        // deshabilitar boton enviar
        document.getElementById("send").disabled=true;
        //regresar propiedades al boton perfil de usuario 
            document.getElementById("btn_txt").innerHTML="Alex03";
            document.getElementById("button_user").value="1"
            document.getElementById("log_out").style.cursor="pointer";
            $("#btn_img").fadeIn(100);
            //habilitar boton cerrar sesión
            document.getElementById("log_out").disabled=false;
        //border bottom al header regresarlo a 0
        document.getElementById("header").style.borderBottom="none"
        //animacion de carga
        setTimeout(function(){
            document.getElementById("body").style.cursor="default";
            document.getElementById("send").style.cursor="default";
            $(".log_in").animate({
                height:"0px",
            },200)
            $(".log_in").fadeOut(0)
            $("#user").fadeOut(0)
            $("#button_user").fadeIn(200)
        },2000)
    }
}
$("#user_name").click(function(){
    document.getElementById("user_name").style.border="2px outset rgb(119, 201, 255)" 
    document.getElementById("password").style.border="2px outset rgb(119, 201, 255)"
    $("#alert_user").fadeOut(1000)
    $("#alert_password").fadeOut(1000)
})
$("#password").click(function(){
    document.getElementById("password").style.border="2px outset rgb(119, 201, 255)" 
    document.getElementById("user_name").style.border="2px outset rgb(119, 201, 255)"
    $("#alert_user").fadeOut(1000)
    $("#alert_password").fadeOut(1000)
})

function profile(){
    var x=document.getElementById("button_user").value
    if (x==1){
        $(".profile").show(0)
        $(".profile").animate({
            height:"210px",
        },150)
        //desabilitar el botón hasta que se termine la transicion para que no haya bug
        document.getElementById("button_user").disabled=true
        setTimeout(function(){
            document.getElementById("button_user").disabled=false
        },200)
        //ocultar elementos del botón de usuario
        $("#btn_img").fadeOut(0)
        document.getElementById("btn_txt").innerHTML="Cerrar"
        document.getElementById("btn_txt").style.color="black"
        document.getElementById("button_user").value="2"
        document.getElementById("header").style.borderBottom="2px solid white"
    }
    else {
        $(".profile").animate({
            height:"0px",
        },150)
        //desabilitar el botón hasta que se termine la transicion para que no haya bug
        document.getElementById("button_user").disabled=true
        setTimeout(function(){
            document.getElementById("button_user").disabled=false
        },200)
        $(".profile").hide(0)
        //mostrar elementos del botón de usuario
        $("#btn_img").fadeIn(100)
        document.getElementById("btn_txt").innerHTML="Alex03"
        document.getElementById("btn_txt").style.color="rgb(170, 125, 0)"
        document.getElementById("header").style.borderBottom="none"
        document.getElementById("button_user").value="1"
    }
}
function log_out(){
    document.getElementById("body").style.cursor="progress";
    document.getElementById("log_out").style.cursor="progress";
    //propiedades al botón iniciar sesión
    document.getElementById("user").value="1"
    document.getElementById("user").innerHTML="Iniciar sesión"
    document.getElementById("user").style.backgroundColor="rgb(237, 252, 110)"
    document.getElementById("user").style.color="rgb(170, 125, 0)"
    document.getElementById("header").style.borderBottom="none"
    document.getElementById("user_name").value=""
    document.getElementById("password").value=""
    document.getElementById("password").style.border="2px outset rgb(119, 201, 255)" 
    document.getElementById("user_name").style.border="2px outset rgb(119, 201, 255)"
    document.getElementById("send").style.cursor="pointer";
    //habilitar boton enviar del boton iniciar sesion
     document.getElementById("send").disabled=false;
    //deshabilitar boton cerrar sesión
    document.getElementById("log_out").disabled=true;
    //animacion de carga
    setTimeout(function(){
        document.getElementById("body").style.cursor="default";
        document.getElementById("log_out").style.cursor="default";
        $(".log_in").animate({
            height:"0px",
        },200)
        $(".profile").fadeOut(0)
        $("#button_user").fadeOut(0)
        $("#user").fadeIn(200)   
    },2000)
}


/*pagina recorridos*/


//Deshabilitar el botón back desde el principio
document.getElementById("back").disabled=true
document.getElementById("bordexd").style.pointerEvents="none"
//cuando de scroll a la pantalla si llega a la seccion de recorridos, la barra nav dejará de verse
window.onscroll = function() {
    var elemento = document.getElementById("recorridos");
    var position = elemento.getBoundingClientRect();
    console.log(position.top)
    if (position.top<=100&&position.top>=-300){
        $("#header").fadeOut(200)
    }
    else{
        $("#header").fadeIn(200) 
    }
}
function next(){
//habilitar el botón back y regresar sus propiedades al inicio
document.getElementById("back").disabled=false;
document.getElementById("back").style.color="white";
document.getElementById("bordexd").style.pointerEvents="initial";
document.getElementById("bordexd").style.backgroundImage="linear-gradient(to left,transparent -5%,rgb(179, 255, 0), rgb(179, 255, 0),black)"
//obtener el value
var x=document.getElementById("next").value
if(x==1){
    $(".recorridos_fosiles").animate({
        marginTop:"-620px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Flora"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="1"
    document.getElementById("next").value="2"
}
else if(x==2){
    $(".recorridos_fosiles").animate({
        marginTop:"-1260px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Fauna"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="2"
    document.getElementById("next").value="3"
}
else if(x==3){
    $(".recorridos_fosiles").animate({
        marginTop:"-1880px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Arte"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="3"
    document.getElementById("next").value="4"
}
else if(x==4){
    $(".recorridos_fosiles").animate({
        marginTop:"-2500px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Cine"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="4"
    document.getElementById("next").value="5"
    //Deshabilitar el botón next
    document.getElementById("next").disabled=true
    document.getElementById("next").style.color="gray";
    document.getElementById("bordexd2").style.pointerEvents="none"
    document.getElementById("bordexd2").style.backgroundImage="linear-gradient(to right,transparent -5%,gray, gray,black)"
}
}
function back(){
//obtener el value
//habilitar el botón next
document.getElementById("next").disabled=false
document.getElementById("next").style.color="white";
document.getElementById("bordexd2").style.pointerEvents="initial";
document.getElementById("bordexd2").style.backgroundImage="linear-gradient(to right,transparent -5%,rgb(179, 255, 0), rgb(179, 255, 0),black)"
var x=document.getElementById("back").value
if(x==1){
    //deshabilitar el botón back y regresar sus propiedades al inicio
    document.getElementById("back").disabled=true;
    document.getElementById("back").style.color="gray";
    document.getElementById("bordexd").style.pointerEvents="none";
    document.getElementById("bordexd").style.backgroundImage="linear-gradient(to left,transparent -5%,gray, gray,black)"
    $(".recorridos_fosiles").animate({
        marginTop:"0px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Fósiles"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="0"
    document.getElementById("next").value="1"
}
else if(x==2){
    $(".recorridos_fosiles").animate({
        marginTop:"-620px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Fauna"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="1"
    document.getElementById("next").value="2"
}
else if(x==3){
    $(".recorridos_fosiles").animate({
        marginTop:"-1260px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Flora"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="2"
    document.getElementById("next").value="3"
}
else if(x==4){
    $(".recorridos_fosiles").animate({
        marginTop:"-1880px"
    },600 )
    $("#sala").fadeOut(0)
    document.getElementById("sala").innerHTML="Arte"
    $("#sala").fadeIn(600)
    document.getElementById("back").value="3"
    document.getElementById("next").value="4"
}
}