const tablero = document.getElementById('tablero');
const piezasMayores = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
const peonesNegros = '♟';
const peonesBlancos = '♙';
const piezasMayoresBlancas = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

for (let i = 0; i < 8; i++)
    {
        for (let j = 0; j < 8; j++)
        {
            const casilla = document.createElement('div');
            casilla.classList.add('casilla');

            if ((i + j) % 2 === 0)
            {
                casilla.classList.add('marronclaro');
            }
            else
            {
                casilla.classList.add('marronoscuro');
            }
            
            let pieza = '';

            if (i === 0)
            {
                pieza = piezasMayores[j];
            }
            else if (i === 1)
            {
                pieza = peonesNegros;
            }
            else if (i === 6)
            {
                pieza = peonesBlancos;
            }
            else if (i === 7)
            {
                pieza = piezasMayoresBlancas[j];
            }

            casilla.textContent = pieza;
            tablero.appendChild(casilla);
        }
    }