import { Component } from "react";
import '.VaildationSample.css';
import { click } from "@testing-library/user-event/dist/click";


class VaildationSample extends Component {
    render() {
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(whit, black)'
        };
        return (
            <div
                style = {style}
                ref = {(ref) => {this.box=ref}}>
                <div style = {innerStyle}></div>
                </div>
        )
    }
    state = {
        password : '',
        clicked : false,
        validated : false
    }
    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }
    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated: this.state.password === '0000'
        });
    }
    render() {
        return (
            <div>
                <input
                    type = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                ></input>
            </div>
        )
    }
}
export default VaildationSample;