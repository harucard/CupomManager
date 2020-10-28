import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import AppContainer from './AppContainer';

import api from '../api';
const Add = () =>{
  const history = useHistory();
  const [loading,setLoading] = useState(false);
  const [title,setTitle] = useState('');
  const [expires_in,setData] = useState('');
  const [quantity,setQuantitiy] = useState();
  const [status,setStatus] = useState('null');

  const changeState = (e) =>{
    console.log(e.target.value)
    setStatus(e.target.value);
    
  }

  const onAddSubmit = async () => {
   
    setLoading(true);
    try{
      await api.addCupom({
        title,expires_in,quantity,status,
      })
      history.push('/CupomManager');
    }catch{
      alert('Falha em adicionar cupom')
      console.error();
      
    } finally{
      setLoading(false);
    }
  }
   
    return(
        <AppContainer 
        title="GERENCIADOR DE CUPONS"
        >
        
         <form>
              <div className="form-group">
                  <label>Nome</label>
                  <input 
                  className="form-control" 
                  type="text"
                  value={title}
                  name="title"
                  onChange={e => setTitle(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label>Data de expiração</label>
                  <input 
                  className="form-control" 
                  type="date"
                  name="expires_in"
                  value={expires_in}
                  onChange={e =>setData(e.target.value)}
                  />
                  
              </div>
              <div className="form-group">
                  <label>Quantidade</label>
                  <input 
                  className="form-control" 
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={e =>setQuantitiy(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label>Status</label>
                  {/* <input 
                  className="form-control" 
                  type="text"
                  value={status}
                  onChange={e =>setStatus(e.target.value)}
                  /> */}
                  <select 
                  name="status"
                  className="custom-select my-1 mr-sm-2"
                  onChange ={changeState}
                  >
                  <option value="null">Selecione uma opção...</option> 
                  <option value="Ativado">Ativado</option> 
                  <option value="Desativado">Desativado</option>
                  </select>
              </div>
              <div className="form-group">
                  <button 
                  type="button"
                  className="btn btn-danger"
                  onClick={onAddSubmit}
                  disabled={loading}
                  >{loading ? 'Processando...':'Adicionar cupom'}</button>
              </div>
          </form>
</AppContainer>
    );
};

export default Add;