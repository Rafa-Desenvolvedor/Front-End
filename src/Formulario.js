function Formulario({botao ,eventoTeclado}){
    return(
        <form>
           
           
            <input type="text" placeholder="Data Inicio" />
            <input type="text" onChange={eventoTeclado} nameplaceholder="Data Fim" />
            <input type='text' onChange={eventoTeclado} name placeholder="Nome Operador Transacionado"/>

            {
                botao
                ?
                <input type='button' value='Cadastrar' className="btn btn-primary"/>
                :
                <div>
                    <input type='button' value= 'Alterar' className="btn btn-warning"/>
                    <input type='button' value= 'Remover' className="btn btn-danger"/>
                    <input type='button' value= 'Cancelar' className="btn btn-secondary"/>
                </div>
            }
 
            <br></br> <input type='button' value="Pesquisar" className='btn btn-primary' />


            
        </form>
    )
}
    


export default Formulario;