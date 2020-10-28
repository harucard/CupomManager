import React,{useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom'
import AppContainer from './AppContainer';
import api from '../api';

const Edit = () =>{
    const {id} = useParams();
  const history = useHistory();
  const [loading,setLoading] = useState(false);
  const [title,setTitle] = useState('');
  const [expires_in,setData] = useState('');
  const [quantity,setQuantitiy] = useState(0);
  const [status,setStatus] = useState('Desativado');

  const onEditSubmit = async () => {
   
    setLoading(true);
    try{
      await api.updateCupom({
        title,expires_in,quantity,status,
      },id)
      history.push('/CupomManager');
    }catch{
      alert('Falha em adicionar cupom')
      
    } finally{
      setLoading(false);
    }
  };

  useEffect(() =>{
      api.getOneCupom(id).then(res =>{
          const result = res.data;
          const cupom = result.data;
          setTitle(cupom.title);
          setData(cupom.expires_in);
          setQuantitiy(cupom.quantity);
          setStatus(cupom.status);
      })
  },[]);
   
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
                  onChange={e => setTitle(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label>Data de expiração</label>
                  <input 
                  className="form-control" 
                  type="date"
                  value={expires_in}
                  onChange={e =>setData(e.target.value)}
                  />
                  
              </div>
              <div className="form-group">
                  <label>Quantidade</label>
                  <input 
                  className="form-control" 
                  type="text"
                  value={quantity}
                  onChange={e =>setQuantitiy(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label>Status</label>
                  <input 
                  className="form-control" 
                  type="text"
                  value={status}
                  onChange={e =>setStatus(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <button 
                  type="button"
                  className="btn btn-success btn-lg btn-block"
                  onClick={onEditSubmit}
                  disabled={loading}
                  >{loading ? 'Processando...':'Editar cupom'}</button>
              </div>
          </form>

    
        </AppContainer>
    );
};

export default Edit;