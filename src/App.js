import React from 'react';
import Home from './components/Home';
import Route from './components/Route';
import RequestView from './components/RequestView';
import ManageView from './components/ManageView';
import Submitted from './components/Submitted';

 class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      requestId: null
    }
  }

  getRequestId = (id) => {
    this.setState({requestId: id});
  }

  resetId = () => {
    this.setState({requestId: null});
  }
  
  render(){
    return (
      <div className="App">
          <Route path="/">
            <Home />
          </Route>
          <Route path="/new_request">
            <RequestView callBack={this.getRequestId}/>
          </Route>
          <Route path="/manage">
            <ManageView />
          </Route>
          <Route path="/submitted">
            <Submitted requestId={this.state.requestId} reset={this.resetId}/>
          </Route>
      </div>
    ); 
  } 
}

export default App;
