import { render } from "@testing-library/react";
import { Component } from "react";

class EventPratice extends Component {
    state = {
        "message" : ''
    }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

    handlekeypress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type = "text"
                    name = "message"
                    placeholder="아무거나 입력하세요"
                    value = {this.state.message}
                    onChange={this.hadleChange}
                ></input>
                <button onClick={this.handleClick}>확인</button>

            </div>
            
        )
    }
}