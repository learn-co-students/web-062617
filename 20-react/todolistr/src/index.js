import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const todos = [
  {task: "Wash Dishes"},
  {task: "Walk Dog"},
  {task: "Brush Teeth"}
]
ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));

registerServiceWorker();
