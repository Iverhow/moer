import React from 'react'
import {addGun, addGunAsync, removeGun} from "./index.redux";
import {connect} from 'react-redux';
// import { connect } from 'react-redux'
// import { addGun, removeGun, addGunAsync,addTwice } from './index.redux'

// 装饰器模式
// @connect(
//     state=>({ num: state}),
//     {addGun, removeGun, addGunAsync,addTwice}
// )
class App extends React.Component{
    render() {
        const num = this.props.num;
        const addGun = this.props.addGun;
        const removeGun = this.props.removeGun;
        const addGunAsync = this.props.addGunAsync;
        return (
            <div>
                <h2>现在有机枪{num}把</h2>
                <button onClick={addGun}>申请武器</button>
                <button onClick={removeGun}>上交武器</button>
                <button onClick={addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}
// App =
// connect(
//   state=>({ num: state}),
//   {addGun, removeGun, addGunAsync}
// )
// (App)
const mapStatetoProps = (state) => {
    return {num: state}
};
const actionCreator = {addGun, removeGun, addGunAsync};
App = connect(mapStatetoProps, actionCreator)(App);
export default App;
