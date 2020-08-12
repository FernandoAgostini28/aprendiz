/* arquivo contendo funçoes e metodos Jquery  - javascrip*/
/* Esta função inicia os cards do artigo fechados quando a página é carregada*/
$(document).ready(function(){
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();

/* Função para abrir a teg p com id p1 e fechar as demais ao receber o click na teg h1 de id h01*/
    $("#h01").click(function(){
        $("#p1").show(); 
        $("#p2").hide();
        $("#p3").hide();
        $("#p4").hide();
        $("#p5").hide(); 
    });

    /* Função para abrir a teg p com id p2 e fechar as demais ao receber o click na teg h1 de id h02*/
    $("#h02").click(function(){
        $("#p2").show(); 
        $("#p1").hide();
        $("#p3").hide();
        $("#p4").hide();
        $("#p5").hide(); 
    });

    /* Função para abrir a teg p com id p3 e fechar as demais ao receber o click na teg h1 de id h03*/
    $("#h03").click(function(){
        $("#p3").show(); 
        $("#p1").hide();
        $("#p2").hide();
        $("#p4").hide();
        $("#p5").hide(); 
    });

    /* Função para abrir a teg p com id p4 e fechar as demais ao receber o click na teg h1 de id h04*/
    $("#h04").click(function(){
        $("#p4").show(); 
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").hide();
        $("#p5").hide(); 
    });
    
    /* Função para abrir a teg p com id p5 e fechar as demais ao receber o click na teg h1 de id h05*/
    $("#h05").click(function(){
        $("#p5").show(); 
        $("#p1").hide();
        $("#p2").hide();
        $("#p4").hide();
        $("#p4").hide(); 
    });
    
   
});