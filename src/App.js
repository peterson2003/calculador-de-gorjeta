import React, {useState} from 'react';
import './App.css';
import './styles.css';

function App() {

  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState('');

  let answer = document.querySelector('.answer');
  
  answer.innerHTML = `
  <p>Sub-total R$ ${conta}</p><br/>
  <p>Gorjeta (${gorjeta}%): R$ </p><br/>
  <p><b>Total: R$ </b></p>
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
