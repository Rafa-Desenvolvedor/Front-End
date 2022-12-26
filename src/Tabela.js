function Tabela({vetor}){
    return(
        <table className='table' >
            <thead>
                <tr>

                    <th>Saldo Total:</th>
                    <th>Saldo no Período:</th>
                </tr>

                <tr>
                   
                    <th>Dados</th>
                    <th>Valencia</th>
                    <th>Tipo</th>
                    <th>Nome do operador</th>
                    
                </tr>

                
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) =>(
                    <tr key={indice}>
                        <td>{obj.data_transferencia}</td>
                        <td>{obj.valor}</td>
                        <td>{obj.tipo}</td>
                        <td>{obj.nome_operador_transacao}</td>
                        <td><button classname="btn btn-success">Selecionar</button></td>
                      
                </tr>

                    ))
                }
            </tbody>

        </table>
    )
}

export default Tabela;