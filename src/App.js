import React, {useState} from 'react';
import './App.css';
import './styles.css';

function App() {

  const [conta, setConta] = useState(0);
  const [gorjeta, setGorjeta] = useState(10);
  
  const gorjetaUnit = conta * (gorjeta / 100);

  const valorTotal = Number(conta) + Number(gorjetaUnit);

  let answerM = document.querySelector('.answer');

  answerM.innerHTML = `
  <p>Sub-total: <b><mark>R$ ${conta}</mark></b></p><br/>
  <p>Gorjeta (<b>${gorjeta}%</b>): <b><mark>R$ ${gorjetaUnit.toFixed(2)}</mark></b></p><br/>
  <p class="total">Total: <b><mark>R$ ${valorTotal.toFixed(2)}</mark></b></p>
  `;

  const handleInput = (e)=>{
    setConta(e.target.value);
  }

  const handleInputGJT = (e)=>{
    setGorjeta(e.target.value);
  }

  return (
    <div className='container'>

      <div className='title'>
        Calculadora de Gorjeta
      </div>

      <div className='content'>
        <p>Quanto deu a conta?</p>
        <input
        type="number"
        className='iConta'
        placeholder='Insira o valor da conta...'
        value={conta}
        onChange={handleInput}
        />

        <p>Qual a porcentagem da gorjeta?</p>
        <input
        type="number"
        className='iGorjeta'
        value={gorjeta}
        onChange={handleInputGJT}
        />
      </div>

      <div className='line'>
        <div></div>
      </div>

      <div className='answer'></div>

    </div>
  );
}

export default App;