import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import Cart from './components/Cart';
import Add from './components/Add';
import Edit from './components/Edit';
import CupomManager from './components/CupomManager';
const App = () =>{
    return(
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                   <Cart/>
                </Route>
                <Route  path="/add">
                   <Add/>
                </Route>
                <Route  path="/CupomManager">
                   <CupomManager/>
                </Route>
                <Route path="/edit/:id">
                   <Edit/>
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App/>,document.getElementById('app'))