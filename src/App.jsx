import React from 'react'
import './App.css'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './redux/store'
import Number from './components/Number'


const App = () => {
  return (
    <Provider store={store}>
       <div>
        <Counter/>
        <Number/>
       </div>
    </Provider>
   
  )
}

export default App