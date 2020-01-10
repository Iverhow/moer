import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {counter, addGun, removeGun, addGunAsync} from './index.redux'
import App from './App'

const store = createStore(counter, applyMiddleware(thunk));
// ReactDOM.render(
//     (
//         <App store={store}
//              addGun={addGun}
//              removeGun={removeGun}
//              addGunAsync={addGunAsync}/>
//     ),
//     document.getElementById('root'));
function render() {
    ReactDOM.render(
        (
            <App store={store}
                 addGun={addGun}
                 removeGun={removeGun}
                 addGunAsync={addGunAsync}/>
        ),
        document.getElementById('root'));
}

render();
store.subscribe(render);