import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../api'


const Cart = () => {
    
    const [products,setProducts] = useState(null);
    const [valor,setValor] = useState(0);
    const [total,setTotal] = useState(0);
    const [desconto,setDesconto] = useState(0);
    const fetchProducts =() =>{
        api.getProduct().then(res => {
            const result = res.data;
           
            setProducts(result.data);
          });
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    const changeState = (e) =>{

      setValor(e.target.value);
      products.map((product)=>(
          setTotal((Number(e.target.value)) * product.price)
      
      ))
    }

    const renderSaLe = () =>{
    if(!products){
        return (
            <tr>
                <td colSpan="3">
                    Carregando produtos...
                </td>
            </tr>
        )
    }
    if(products.length ===0){
        return (
            <tr>
                <td colSpan="4">
                   sem vendas
                </td>
            </tr>
        )
    }
    return products.map((product)=>(
        <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.description} </td>
        <td>{product.price}</td>
        <td>
            <input 
              type="number" 
              min="0"
              value={valor}
              onChange={changeState}
              />
        </td>
        <td>{total}</td>
    </tr>
    ))
}
 

    return (
        <div className="container">
             <Link to="/CupomManager" className="btn btn-primary">Gerenciar Cupons</Link> 
            
        <div className="card">
            <div className="card-header">Carrinho</div>
            <div className="card-body">
               
                   <div className="table-responsive">
                       <table className="table table-striped mt-4">
                         <thead>
                             <tr>
                                 <th>ID</th>
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
                       <div>
                         <div>
                           <span>Cupom</span>
                            <input type="text"/>
                          </div>
                       <div>
                            <span>Subtotal:{total}</span>
                            <span>Desconto:{desconto}</span>
                            <span>Total:{total-desconto}</span>
                   </div>
                           </div>
                      
                  
                       <button 
                       o="/add" className="btn btn-primary">Gerar venda</button>
              
        </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;


//Estilizacao tabela unico campo


// tbody tr:nth-last-child(3) td:nth-child(3) {
//     background: orange;
//   }