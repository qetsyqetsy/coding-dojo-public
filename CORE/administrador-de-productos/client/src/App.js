import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/products" component={Main} />
                    <Route path="/products/:id" render={(props) => <Detail id={props.match.params.id} />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
