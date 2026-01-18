import { Component } from "react";
import './index.css';

class ButtonCounter extends Component{
    state ={counter:0}

    onClickButtonIncrease = () => {
        this.setState(prevState => ({
            counter:prevState.counter + 1 
        }))
    }
    render(){
        const {counter} = this.state 
        return(
            <div className="app-container">
              <div className="container2">
                <h1>The Button has been clicked <span className="count">{counter}</span>times</h1>
                <p>Click the button increase the counter</p>
                <button onClick={this.onClickButtonIncrease}>Click Me</button>

              </div>

            </div>
        
        )
    }
}

export default ButtonCounter;