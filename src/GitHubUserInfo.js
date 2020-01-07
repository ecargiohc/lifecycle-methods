import React, {Component} from 'react';
import axios from 'axios';

class GitHubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "",
            name: ""
        }
    };
    
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        // whatever is written after 'await' will wait until data has finished loading to return something
        let data = response.data;
        console.log(data);
        this.setState({
            imgUrl: data.avatar_url, name: data.name
        })
    }
    render() {
        return(
            <div>
                <h1>GitHub User: {this.state.name}</h1>
                <img src={this.state.imgUrl}/>
            </div>
        )
    }
}
export default GitHubUserInfo;