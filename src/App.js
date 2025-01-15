import React, { useState } from 'react';
import './App.css';

function App() {
  // Lista de palavras possíveis
  const palavras = ['react', 'javascript', 'programacao', 'desenvolvimento', 'frontend'];
  
  // Escolher uma palavra aleatória
  const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

  // Estado para as letras já adivinhadas
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  
  // Estado para a parte da forca
  const [erros, setErros] = useState(0);

  // Função para lidar com a adivinhação de uma letra
  const adivinharLetra = (letra) => {
    // Se a letra já foi adivinhada ou a palavra já foi adivinhada, não faz nada
    if (letrasCorretas.includes(letra) || erros >= 6) return;
    
    if (palavraEscolhida.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setErros(erros + 1);
    }
  };

  // Função para renderizar a palavra oculta
  const renderizarPalavra = () => {
    return palavraEscolhida.split('').map((letra, index) => (
      letrasCorretas.includes(letra) ? letra : '_'
    )).join(' ');
  };

  // Função para renderizar as tentativas erradas
  const renderizarErros = () => {
    const partesDaForca = [
      'Cabeça', 'Tronco', 'Braço esquerdo', 'Braço direito', 'Perna esquerda', 'Perna direita'
    ];
    return partesDaForca.slice(0, erros).join(', ');
  };

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    setLetrasCorretas([]);
    setErros(0);
  };

  return (
    <div className="App">
      <h1>Jogo da Forca</h1>

      {/* Palavra oculta */}
      <h2>{renderizarPalavra()}</h2>

      {/* Letra já erradas */}
      {erros > 0 && (
        <div>
          <p>Erros: {renderizarErros()}</p>
        </div>
      )}

      {/* Teclado de letras */}
      <div>
        {'abcdefghijklmnopqrstuvwxyz'.split('').map((letra) => (
          <button
            key={letra}
            onClick={() => adivinharLetra(letra)}
            disabled={letrasCorretas.includes(letra) || erros >= 6}
          >
            {letra}
          </button>
        ))}
      </div>

      {/* Condição de vitória ou derrota */}
      {erros >= 6 ? (
        <div>
          <p>Você perdeu! A palavra era "{palavraEscolhida}".</p>
          <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
        </div>
      ) : letrasCorretas.length === palavraEscolhida.length ? (
        <div>
          <p>Você venceu! Parabéns!</p>
          <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
