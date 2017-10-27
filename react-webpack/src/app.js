'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <h1>Calculadora de Churrasco</h1>
    <h2>Escolha sua opção abaixo:</h2>
    <div className='options-all'>
      <div className='churrasco'>
        <img src='../img/meat-icon.png' />
        <h3>Churrasco</h3>
      </div>
      <div className='bebidas'>
        <img src='../img/beer-icon.png' />
        <h3>Bebidas</h3>
      </div>
      <div className='pizza'>
        <img src='../img/pizza-icon.png' />
        <h3>Pizza</h3>
      </div>
    </div>
  </div>
)

export default App
