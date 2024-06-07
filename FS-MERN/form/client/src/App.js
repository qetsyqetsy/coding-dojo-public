import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/people/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route path="people/:id" render={ (routeProps) => <Detail {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}
export default App;

