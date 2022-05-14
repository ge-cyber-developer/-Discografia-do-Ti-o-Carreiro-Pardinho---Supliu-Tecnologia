import React, { useState } from "react";
import './App.css';
import logo from '../src/images/logo.png';
import api from "./services/api";

function App() {



  const [input, setInput] = useState('')

  async function handleSearch(){
    if (input === ''){
      console.log('Por favor digite uma palavra chave')
      return;
    }
    try{
      const response = await api.get(`album?keyword=${input}&limit=10&page=1`)
      console.log(response.data.data)

    }catch{
      console.error("ops! ocorreu um erro" );
      console.log(input)
    }
  }



  return (
    <div className="container">
      <div className='containerContent'>
        <div className='containerHeader'>
          <img className='logo' src={logo} alt=''/>

          <h1 className='title'>Discografia </h1>
        </div>
        <div className='containerInput'>

          <input type="text"
          placeholder='Digite uma palavra chave'
          value={input}
          onInput={e => setInput(e.target.value)}/>

          <button className='buttonSearch' onClick={handleSearch}>
          Procurar
          </button>

          <main className='main'>
            
            
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;
