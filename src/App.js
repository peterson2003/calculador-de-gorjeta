import React, {useState} from 'react';
import './App.css';
import './styles.css';

function App() {

  const [conta, setConta] = useState(0);
  const [gorjeta, setGorjeta] = useState(10);
  
  const gorjetaUnit = conta * (gorjeta / 100);

  const valorTotal = Number(conta) + Number(gorjetaUnit);

  let answerM = document.querySelector('.answer');

  return (
    <div className='container'>

      <div className='title'>
        Calculador de Gorjeta
      </div>

      <div className='content'>
        <p>Quanto deu a conta?</p>
        <input
        type="number"
        className='iConta'
        placeholder='Insira o valor da conta...'
        value={conta}
        onChange={({target})=>{setConta(target.value)}}
        />

        <p>Qual a porcentagem da gorjeta?</p>
        <input
        type="number"
        className='iGorjeta'
        value={gorjeta}
        onChange={({target})=>{setGorjeta(target.value)}}
        />
      </div>

      <div className='answer'>
        <p>Sub-total: <b><mark>R${conta}</mark></b></p>
        <p>Gorjeta (<b>{`${gorjeta}%`}</b>): <b><mark>R${gorjetaUnit.toFixed(2)}</mark></b></p>
        <p>Total: <b><mark>R${valorTotal.toFixed(2)}</mark></b></p>
      </div>

    </div>
  );
}

export default App;