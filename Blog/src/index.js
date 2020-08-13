/* arquivo contendo funçoes e metodos Jquery  - javascrip*/
/* Esta função ativa e desativa a classe no CSS*/

$(document).ready(function(){
    $(".artigo_header").click(function(){
        $(".artigo_header").removeClass("active");
        $(this).addClass("active");
    })

});