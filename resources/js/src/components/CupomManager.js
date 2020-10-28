import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import AppContainer from './AppContainer'
import api from '../api'


const CupomManager = () => {
    const [cupons,setCupons] = useState(null);

    const fetchCupons =() =>{
        api.getAllCupoms().then(res => {
            const result = res.data;
            setCupons(result.data);
          });
    }

    useEffect(() => {
      fetchCupons();
    },[]);

    const renderCupons = () =>{
        if(!cupons){
            return (
                <tr>
                    <td colSpan="4">
                        Carregando cupons...
                    </td>
                </tr>
            )
        }
        if(cupons.length ===0){
            return (
                <tr>
                    <td colSpan="6">
                       Não existe nenhum cupom cadastrado
                    </td>
                </tr>
            )
        }
        return cupons.map((cupom)=>(
            <tr key={cupom.id}>
                <td>{cupom.id}</td>
                <td>{cupom.title}</td>
                <td>{cupom.expires_in}</td>
                <td>{cupom.quantity}</td>
                <td>{cupom.status}</td>
                <td>
                    <Link 
                    className="btn btn-outline-warning text-dark mr-2" 
                    to={`/edit/${cupom.id}`}>
                    Editar
                    </Link>
                    <button
                     type="button" 
                     className="btn btn-outline-danger"
                     onClick={()=>{
                         api.deleteCupom(cupom.id)
                         .then(fetchCupons)
                         .catch(err =>{
                             alert('Falha em deletar cupom com id:'+ cupom.id);
                         })
                     }}
                    >
                    Deletar
                    </button> 
               </td>
            </tr>
        ))
    }
    return (
        
       <AppContainer
       title="Carrinho"
       >
            <Link to="/" className="btn btn-danger text-white ">Voltar</Link>
              
                   <div className="table-responsive">
                       <table className="table table-borderless table-hover table-sm ">
                         <thead>
                             <tr>
                                 <th>Codigo</th>
                                 <th>Titulo</th>
                                 <th>Expira em</th>
                                 <th>Quantidade</th>
                                 <th>Status</th>
                                 <th>Ação</th>
                             </tr>
                         </thead>
                         <tbody>
                           {renderCupons() }
                         </tbody>
                       </table>
                       <Link to="/add" className="btn btn-danger text-white ">Adicionar cupom</Link>
                       </div>
       </AppContainer>
    );
};

export default CupomManager;