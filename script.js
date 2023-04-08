var cobrinha_2 = document.getElementById("cobrinha_2");
var x_2 = 200;  // posição inicial 
var y_2 = 200;  // posição inical 

// segundo jogador move pelas as setinhas
window.addEventListener("keydown", function (event) {
    var tecla = event.keyCode;
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
});





// segundo jogador move pelas as setinhas

var cobrinha = document.getElementById("quadrado");
var x = 100;
var y = 100;


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

    posicao_x = cobrinha.style.left = x + "px";
    posicao_y = cobrinha.style.top = y + "px";
    if (posicao_x == posicao_x_2 || posicao_y == posicao_y_2) {
        alert("Game Over");
        
    }
});



// Cria um novo elemento div
for (let i = 0; i < 2; i++) {
    var div = document.createElement("div");

    // Define um id para a div criada
    div.id = "minhaDiv";

    // Define o conteúdo da div criada
    div.innerHTML = "Minha div criada com JavaScript!";

    // Adiciona a nova div ao corpo da página
    document.body.appendChild(div);

}

alert(posicao_x)
