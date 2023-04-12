// Definindo as variáveis
var container = document.querySelector('.container');
var snake = document.querySelector('.snake');
var food = document.querySelector('.food');
const cauda = document.querySelector('.cauda');
var quadrado_ligados = document.querySelector('.quadrado');

var snakeLeft = 0;
var snakeTop = 0;
var foodLeft = Math.floor(Math.random() * 15) * 20;
var foodTop = Math.floor(Math.random() * 10) * 20;




// Posicionando a comida
food.style.left = foodLeft + 'px';
food.style.top = foodTop + 'px';

// Movimentando a cobra
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        // Movimento para a esquerda
        snakeLeft -= 20;
    } else if (event.keyCode === 38) {
        // Movimento para cima
        snakeTop -= 20;
    } else if (event.keyCode === 39) {
        // Movimento para a direita
        snakeLeft += 20;
    } else if (event.keyCode === 40) {
        // Movimento para baixo
        snakeTop += 20;
    }

    // Limitando a movimentação
    if (snakeLeft < 0) {
        snakeLeft = 0;
    } else if (snakeLeft > 580) {
        snakeLeft = 580;
    } else if (snakeTop < 0) {
        snakeTop = 0;
    } else if (snakeTop > 380) {
        snakeTop = 380;
    }

    // Verificando colisão com a comida
    if (snakeLeft === foodLeft && snakeTop === foodTop) {
        foodLeft = Math.floor(Math.random() * 15) * 20;
        foodTop = Math.floor(Math.random() * 10) * 20;
        food.style.left = foodLeft + 'px';
        food.style.top = foodTop + 'px';
        console.log(typeof (snake))
        console.log("Houve colisão");
        aumentarCobra();
        

    }

    // Atualizando a posição da cobra
    snake.style.left = snakeLeft + 'px';
    snake.style.top = snakeTop + 'px';
});
function aumentarCobra() {
    if (cauda) {
        const novaDiv = document.createElement('div');
        cauda.appendChild(novaDiv);
        snake.appendChild(novaDiv);
      }
    
    

}