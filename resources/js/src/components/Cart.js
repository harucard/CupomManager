import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../api'
import styles from '../style/Cart.css'

const Cart = () => {
    
    const [products,setProducts] = useState(null);
    const [valor,setValor] = useState(0);
    const [total,setTotal] = useState(0);
    const [desconto,setDesconto] = useState(0);
    const [word,setWord] = useState('');
    const [cupons,setCupoms] = useState(null);
    

    const fetchProducts =() =>{
        api.getProduct().then(res => {
        const result = res.data;
        setProducts(result.data);
          });
    }

    const changeState = (e) =>{
        setValor(e.target.value);
        products.map((product)=>(
        setTotal((Number(e.target.value)) * product.price)
       ))
     }

    const getCupoms = () =>{
        api.getAllCupoms().then(res=>{
            const result = res.data;
            
            setCupoms(result.data);
        })
     }

     const searchCupom = (e) =>{
         if(e.target.value!==null){
          setWord(e.target.value);
          getCupoms();
         const result = cupons.filter((cupom)=>(
           cupom.title===word
           ))  
           console.log(result)
        }
    }
       
      const applyCupom = (e) =>{
        
     }

    const renderSaLe = () =>{
    if(!products){
        return (
        <tr>
         <td colSpan="3">
            Carregando produtos...
         </td>
        </tr>)
    }

    if(products.length ===0){
        return (
        <tr>
          <td colSpan="4">
           sem vendas
          </td>
        </tr>)
    }

    return products.map((product)=>(
        <tr key={product.id}>
        <td>{product.description} </td>
        <td>{product.price}</td>
        <td>
         <input 
            type="number" 
            min="0"
            value={valor}
            onChange={changeState}/>
        </td>
        <td>{total}</td>
    </tr>))
}

useEffect(() => {
    fetchProducts();
},[]);

    return (
        <div className="containerId">
          <Link to="/CupomManager" className="btn btn-danger btn-lg btn-block mb-5 mt-5">Gerenciar Cupons</Link> 
        <div className="card">
            <div className="card-header">Carrinho</div>
            <div className="card-body">
             <div className="table-responsive">
              <table className="table table-striped mt-4">
               <thead>
                 <tr>
                  <th>Produto </th>
                  <th>Valor</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                 </tr>
                </thead>
                   <tbody>
                    {renderSaLe()}
                   </tbody>
              </table>
         <div className="sale">
            
             <div className="cupon">
             <div className="cuponForm">
              <span>Cupom</span>
              <input id="input" type="text"
           
              />
              </div>
              <button
               onClick={applyCupom}
               className="btn btn-danger text-white btnCupom"
                >Usar cupom</button>
             </div>
             <div className="container">
             <div className="results">
                   <div className="title">
                   <span>Subtotal: </span>
                   <span>Desconto:</span>
                   <span>Total: </span>
                   </div>
                   <div className="value">
                   <span>{total}</span>
                   <span>{desconto}</span>
                   <span>{total-desconto}</span>
                   </div>
              
           
              </div>
              <button 
            className="btn btn-danger text-white btnsale">Concluir venda</button>
             </div>
              
        </div>
        
            
        </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;

