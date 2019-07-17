import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {logInAction, logOutAction} from './actions';

function App() {

  const isLoggedInReducer = useSelector(state =>state.isLoggedInReducer);
  console.log(isLoggedInReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Login Status : {isLoggedInReducer.toString()}</p>
      {// Why not use it this way >>>
       // <button onClick= {() => dispatch({type : 'LogIN'})}>Login</button>
      }
      <button onClick= {() => dispatch(logInAction())}>Login</button>
      <button onClick= {() => dispatch(logOutAction())}>Logout</button>
    </div>
  );
}

export default App;
