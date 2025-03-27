import { Component } from "react";

class Welcome extends Component{

    constructor(props){
        super(props);
        this.state = {count : this.props.initial}
        console.log("Constructor called")
    }

    componentDidMount(){
        console.log("Component Mounted")
    }

    componentWillUnmount(){
        console.log("Component Unmounted")
    }

    componentDidUpdate(prevProps , prevState){
        console.log("Previos state : " , prevState.count , " " , prevProps)
        console.log("Current State : ", this.state.count)

        console.log("Component Updated")
    }

    increment = () => {
        this.setState({ count : this.state.count + this.props.step })
    }

    decrement = () => {
        this.setState({ count : this.state.count - this.props.step })
    }

    alertdecrement = () => {
        alert("Can't go below")
    }

    alertincrement = () => {
        alert("Can't go above")
    }

    render() {
        return( 
        <div>
            <h1>{this.state.count}</h1>
            <button onClick = {this.state.count < this.props.limit ? this.increment : this.alertincrement}>+</button>
            <button onClick = {this.state.count > -this.props.limit ? this.decrement : this.alertdecrement}>-</button>
        </div>
        )
    }
}
export default Welcome