$(document).ready(inicio);

var btnState = false;
var minutos;
var segundos = 0;
var totalEnSegundos = 0;
var minutoFinal = 0;
var trackAudio = "audio1up";
var mediaElement;

var currentTimeAsc = 0;
var btnplay = false;
var btnResettime = false

var ascendente = false;
//console.log(ascendente);




function inicio(){
    //AUDIO PREFERENCES
    $("#cuadritos").css("visibility","hidden");
    $(".imgAudio").parent().on("click",function(){
        var audioSeleccionado = $(this).attr("data-audio");
            mediaElement = document.getElementById("repro");
            mediaElement.src = "sounds/"+audioSeleccionado+".mp3";
            mediaElement.loop= true;
            mediaElement.play();
            localStorage.setItem('trackAudio', audioSeleccionado);
            return;
    });
    $("#regresa").click(function() {
        $('#wrapper').toggleClass('anima');
         $("#play").show("slow");
        $("#reload").show("slow");
        $("#customize").show("slow");
        $(".opcAudio").css("display","none");
        mediaElement.pause();
        mediaElement.currentTime = 0;

  });
    $(".selectTime").on("click",function(){
        //$("#cuadritos").css("visibility","visible");
        switch($(this).attr("id")) {
            case "selec1":
            $("#selec1").css("background-color","#ffe78f");
            $("#selec2").css("background-color","#fff");
            $("#selec3").css("background-color","#fff");
            $("#selec4").css("background-color","#fff");
            $("#selec5").css("background-color","#fff");
            break;
            case "selec2":
            $("#selec1").css("background-color","#fff");
            $("#selec2").css("background-color","#ffe78f");
            $("#selec3").css("background-color","#fff");
            $("#selec4").css("background-color","#fff");
            $("#selec5").css("background-color","#fff");
            break;
            case "selec3":
            $("#selec1").css("background-color","#fff");
            $("#selec2").css("background-color","#fff");
            $("#selec3").css("background-color","#ffe78f");
            $("#selec4").css("background-color","#fff");
            $("#selec5").css("background-color","#fff");
            break;
            case "selec4":
            $("#selec1").css("background-color","#fff");
            $("#selec2").css("background-color","#fff");
            $("#selec3").css("background-color","#fff");
            $("#selec4").css("background-color","#ffe78f");
            $("#selec5").css("background-color","#fff");
            break;
            case "selec5":
            $("#selec1").css("background-color","#fff");
            $("#selec2").css("background-color","#fff");
            $("#selec3").css("background-color","#fff");
            $("#selec4").css("background-color","#fff");
            $("#selec5").css("background-color","#ffe78f");
            break;
            default:
            console.log("Nada, por aqui, nada por alla!");
        } 
        if($(this).attr("id")=="selec5"){
            $(".controles").css("display","block");
            //Lanzamos dinamicamente el valor de 0 en el hidden
            var uno = $(this).attr("data-cual");
            $('#escondido').val(uno);
            contabilizar(uno);
        }else{
    var cualSeleccionaste = $(this).attr("data-cual");
         $(".controles").css("display","none");
         $('#escondido').val(cualSeleccionaste);
         //reviso en que estado se encentra
         if(btnState){$("#play").children().attr("src","assets/PLAY.png");btnState=false;}
        }
    Example2.Timer.stop();
    Example2.resetCountdown();

    $("#play").on("click",function(){
        //console.log("se pulso play");
        btnplay = true;
        lockbuttons();

        $(".controles").css("display","none");
         var valor = $('#escondido').val();
         if(!valor.length == 0){
            if(!btnState){
                $(this).children().attr("src","assets/PAUSE.png");
                btnState=true;

            }else{
               $(this).children().attr("src","assets/PLAY.png");
               btnState=false;
           }
           Example2.Timer.toggle();
         }
    });
    })



    $("#reload").on("click",function(){
        document.location.reload();
    });
    $("#customize").click(function() {
        $('#wrapper').toggleClass('anima');
        $("#play").hide("slow");
        $("#reload").hide("slow");
        $("#customize").hide("slow");
        $(".opcAudio").css("display","block");
  });
    
    //MINUTOS
    $("#minutoSube").on("click",minutoSube);
    $("#minutoBaja").on("click",minutoBaja);
    //SEGUNDOS
    $("#segundoSube").on("click",segundoSube);
    $("#segundoBaja").on("click",segundoBaja);
}

var Example2 = new (function() {
    var $countdown;
    var $form;
    var incrementTime = 70;
    var currentTime = 1; // 5 minutes (in milliseconds)

    $('#countAsc').on("click",asctrue);
    $('#countDesc').on("click",ascfalse);
    
    $(function() {
        // Setup the timer
        $countdown = $('#countdown');
        Example2.Timer = $.timer(updateTimer, incrementTime, false);

        // Setup form
        $form = $('#example2form');
        $form.bind('submit', function() {
            Example2.resetCountdown();
            return false;
        });

    });

    function updateTimer() {

        // STRINGIFY DE TIMER
       // console.log(currentTime);
       // console.log(currentTimeAsc);

        var timeString = formatTime(currentTime);
        //console.log(timeString);
        $countdown.html(timeString);

        if (ascendente && btnplay) {
            var timeString = formatTime(currentTimeAsc);
            //console.log(timeString);
            $countdown.html(timeString);        
        }
        

        // Dispara la alarma y resetea el contdown etc !!!
        if (currentTime == 0) {
            //console.log("primero desc");
            Example2.Timer.stop();
            timerComplete();
            Example2.resetCountdown();
            zombiesAreComing();
            soportelocalstorage();
            lockplay();
        }

        if (ascendente && btnplay) {
           // console.log("entro a contador de ascendente");
            currentTimeAsc += incrementTime;
        }
        
        currentTime -= incrementTime;
        //console.log("contador descendente");
        if (currentTime < 0) {
            currentTime = 0;
            btnResettime = true;
        }


    }

    this.resetCountdown = function() {

        // Dame el tiempo del formato
        var newTime = parseInt($form.find('input[type=hidden]').val()) * 1000;
        //console.log(newTime + "new time");
        if (newTime > 0) {
            currentTime = newTime;
        }

        if (btnResettime) {
            currentTimeAsc = newTime;
        }

        // STOP Y RESETEA
        Example2.Timer.stop().once();

    };

});

// Funciones compartidas
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    time = time / 10;
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60),
        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
}

function timerComplete(){
   $("#play").children().attr("src","assets/PLAY.png");
   btnState=false;
}
function minutoSube(){
    //reviso data-cual y lo multiplico para que suba minuto a minuto hasta 100
    //98--> 5880
    //99 -->5940
    if(parseInt($("#escondido").val())>=5940){
       minutoFinal = 60;
       $("#escondido").val(minutoFinal.toString());
       contabilizar();

    }else{
    minutoFinal = parseInt($("#escondido").val())+60;
    $("#escondido").val(minutoFinal.toString());
    contabilizar();
    }

}

function minutoBaja(){
if(parseInt($("#escondido").val())<=60){
       minutoFinal = 5940;
       $("#escondido").val(minutoFinal.toString());
       contabilizar();

    }else{
    minutoFinal = parseInt($("#escondido").val())-60;
    $("#escondido").val(minutoFinal.toString());
    contabilizar();
    }

}

function segundoSube(){
     // 99:59 --> 5999
    if(parseInt($("#escondido").val())>=5999){
       minutoFinal = 5940;
       $("#escondido").val(minutoFinal.toString());
       contabilizar();

    }else{
         segundos = parseInt($("#escondido").val());
    minutoFinal = segundos+1;
    $("#escondido").val(minutoFinal.toString());
    contabilizar();
    }
}

function segundoBaja(){
   segundos = parseInt($("#escondido").val());
    minutoFinal = segundos-1;
    $("#escondido").val(minutoFinal.toString());
    contabilizar(); 

}


function contabilizar(primerValor){
    Example2.Timer.stop();
    Example2.resetCountdown();
}

function zombiesAreComing(){
$("#reload").children().attr("src","assets/PARARUIDO.png");
}


function soportelocalstorage() {
    //SOPORTE LOCALSTORAGE
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('trackAudio') === null) {
         trackAudio = "audio1up";
        }else{
            trackAudio = localStorage.getItem('trackAudio');
        }
    } else {
        alert("Sorry! No Web Storage support..");
    }
    mediaElement = document.getElementById("repro");
    mediaElement.src = "sounds/"+trackAudio+".mp3";
    mediaElement.loop= true;
    mediaElement.play();
    return;
}

function asctrue() {
    ascendente = true;
    console.log(ascendente)
    $("#countAsc").addClass("active");
    $("#countDesc").removeClass("active");
}

function ascfalse() {
    ascendente = false;
    console.log(ascendente)
    $("#countDesc").addClass("active");
    $("#countAsc").removeClass("active");
}


function lockbuttons() {
    $('#countDesc').unbind('click');
    $('#countAsc').unbind('click');
    $('.selectTime').unbind('click');

    $("#countDesc").css("cursor","not-allowed");
    $("#countAsc").css("cursor","not-allowed");
    $(".selectTime").css("cursor","not-allowed");
}

function lockplay() {
    $('#play').unbind('click');
    $("#play").css("cursor","not-allowed");
}


