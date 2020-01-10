import React from 'react'
import {addGun, addGunAsync, removeGun} from "./index.redux";
import {connect} from 'react-redux';

// const mapStatetoProps = (state) => {
//     return {num: state}
// };
// const actionCreator = {addGun, removeGun, addGunAsync};
@connect(
    state => ({num: state}),
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>现在有机枪{this.props.num}把</h2>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}

// App = connect(mapStatetoProps, actionCreator)(App);
export default App;
