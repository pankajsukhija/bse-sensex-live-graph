import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {logInAction, logOutAction} from './actions';
import BseSocket from './Components/BseSocket';
// import {configureStore} from 'redux-starter-kit'; 


// const store = configureStore({
//   reducer: allReducers
// })

const mapStateToProps = state => { // This is some Rick and Morty level shit
  return {state}
}

function App(props) {
  console.log(props)
  // const isLoggedInReducer = useSelector(state =>state.isLoggedInReducer);
  // console.log(isLoggedInReducer);
  // console.log(store.getState())
  // const unsubscribe = store.subscribe(() => console.log(store.getState()))
  
  
  return (
      <div className="App">
        <p>Login Status : {props.state.isLoggedInReducer.toString()}</p> {
          // State is recived as props from Connect function
        }
        <button onClick= {() => props.logInAction()}>Login</button>
        <button onClick= {() => props.logOutAction()}>Logout</button>
        <br/>
        <BseSocket></BseSocket>
      </div>
  );

}

export default connect(
  mapStateToProps, {logInAction, logOutAction})(App);
