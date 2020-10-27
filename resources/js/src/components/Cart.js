import React from 'react';
import {Link} from 'react-router-dom';


const Cart = () => {
   

 

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
                                
                             </tr>
                         </thead>
                         <tbody>
                         <tr>
                                 <td>2</td>
                                 <td>Sample </td>
                                 <td>12,00</td>
                                
                             </tr>
                         </tbody>
                       </table>
                       <Link to="/add" className="btn btn-primary">Gerar venda</Link>
              
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