import React,{Fragment} from 'react';

const CupomFormContainer = ({buttonName,click,disable}) =>{
    return(
        <Fragment>
             <form>
              <div className="form-group">
                  <label>Nome</label>
                  <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                  <label>Data de expiração</label>
                  <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                  <label>Quantidade</label>
                  <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                  <label>Status</label>
                  <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                  <button 
                  className="btn btn-success"
                  onClick={click}
                  disabled={disable}
                  >{buttonName}</button>
              </div>
          </form>
        </Fragment>
    )
};

export default CupomFormContainer;