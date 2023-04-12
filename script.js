

var cobrinha_2 = document.getElementById("cobrinha_2"); // azul 
var x_2 = 200;  // posição inicial 
var y_2 = 200;  // posição inical 

// segundo jogador move pelas as AWSD
window.addEventListener("keydown", function (event) {
   
    switch (event.keyCode) {

        case 65: // A
            x_2 -= 10;
            break;
        case 87: // W
            y_2 -= 10;
            break;
        case 68: // D
            x_2 += 10;
            break;
        case 83: // S
            y_2 += 10;
            break;
    }

    posicao_x_2 = cobrinha_2.style.left = x_2 + "px";
    posicao_y_2 = cobrinha_2.style.top = y_2 + "px";
    var coordenadas_Cobrinha_1 = cobrinha.getBoundingClientRect();
    var coordenadas_Cobrinha_2 = cobrinha_2.getBoundingClientRect();


    // Verifica se há sobreposição entre as divs
    if (coordenadas_Cobrinha_1.right > coordenadas_Cobrinha_2.left && coordenadas_Cobrinha_1.left < coordenadas_Cobrinha_2.right && coordenadas_Cobrinha_1.bottom > coordenadas_Cobrinha_2.top && coordenadas_Cobrinha_1.top < coordenadas_Cobrinha_2.bottom) {
        console.log("As divs estão sobrepostas.");
    } else {
        console.log("As divs não estão sobrepostas.");
    }
});





// segundo jogador move pelas as setinhas

var cobrinha = document.getElementById("quadrado");
var x = 100;
var y = 100;

/*  por enquanto vai fica assim 

window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37: // esquerda
            x -= 10;
            break;
        case 38: // cima
            y -= 10;
            break;
        case 39: // direita
            x += 10;
            break;
        case 40: // baixo
            y += 10;
            break;
    }

    cobrinha.style.left = x + "px";
    cobrinha.style.top = y + "px";
    

});

*/


