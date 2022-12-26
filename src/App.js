/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //objeto produto
 
  //UseState
    const[produtos, setProdutos] = useState([]);
    const [objProduto,setobjProduto] = useState(produtos);
    //UseEffect
    useEffect(()=>{
        fetch("http://localhost:8080/transacao")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setProdutos(retorno_convertido));
      }, [] );
        
    // Obtendo os dados do formulario
    const aoDigitar = (e) => {
      console.log(e.target);
    }
  
    return (
    <div>

      <p>{JSON.stringify(objProduto)}</p>

      <Tabela   vetor={produtos}/>
    </div>
  );
}

export default App;
