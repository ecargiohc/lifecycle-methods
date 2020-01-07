import React, {Component} from 'react';
import axios from 'axios';
import "./Loader.css";

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            isLoaded: false
        }
    }
    componentDidMount() {
        console.log("component DID MOUNT")
        // load data 
        axios.get("https://api.github.com/zen")
        .then(res => {
            setTimeout(function(){
                this.setState({
                    quote: res.data,
                    isLoaded: true
                })
            }.bind(this), 3000)
        })
        // set state with that data
    };

    componentDidUpdate() {
        console.log("inside component DID UPDATE")
    };

    render() {
        return(
            <div>
                {this.state.isLoaded ? 
                (<div>
                    <h2>Always remember...</h2>
                    <p>{this.state.quote}</p>
                </div>) 
                : (<div className="loader">
                    <div className="leo-border-1">
                    <div className="leo-core-1"></div>
                    </div> 
                    <div className="leo-border-2">
                        <div className="leo-core-2"></div>
                    </div> 
                </div>)
                }
            </div>
        )
    }
}
export default ZenQuote;