function variavelLocal() {
    var primeira = "Test1";
console.log(primeira)
};

var segundaGlobal = "testGlobal";
function variavelGlobal() {
var segundaLocal = "testlocal";
console.log(segundaLocal + " - " + segundaGlobal);
};

function variavelLocalSoQueNao() {
 terceiraLocal = "terceira local"; //declarar uma variavel sem o "var" dentro de uma funcao a torna global//
};

