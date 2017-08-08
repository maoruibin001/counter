import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);

const render = () => {
    return ReactDOM.render(
  <Counter
     value={store.getState()} onAddOdd={()=>store.dispatch({type: 'ADD_ODD'})} onIncrement={()=>store.dispatch({type: "INCREMENT"})}  onAddOne={()=>store.dispatch({type: 'ADD_ONE'})}
  />,
  document.getElementById('app')
)}

render()
store.subscribe(render)

// render(<Counter value={store.getState()} onAddOdd={()=>store.dispatch({type: 'ADD_ODD'})} onIncrement={()=>store.dispatch({type: "INCREMENT"})}  onAddOne={()=>store.dispatch({type: 'ADD_ONE'})}/>, );