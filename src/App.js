import React from 'react';
import Home from './components/Home';
import Route from './components/Route';
import RequestView from './components/RequestView';
import ManageView from './components/ManageView';

 class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      
    }
  }
  
  render(){
    return (
      <div className="App">
          <Route path="/">
            <Home />
          </Route>
          <Route path="/new_request">
            <RequestView />
          </Route>
          <Route path="/manage">
            <ManageView />
          </Route>
      </div>
    ); 
  } 
}

export default App;
