(function(controlador){ 
    "use strict";
$(".novoCartao").submit(function (event) {
    event.preventDefault();

    var campoConteudo = $(".novoCartao-conteudo");
    var conteudo = campoConteudo.val().trim().replace(/\n/g, "<br>") /*.replace("**","<b>").replace("**","</b>")*/ ;

    if (conteudo) {
       controladorDeCartoes.adicionaCartao(conteudo);
       $(document).trigger("precisaSincronizar");
    };
    campoConteudo.val("");

    event.preventDefault();
});

var contador = $(".cartao").length;
})(controladorDeCartoes);
