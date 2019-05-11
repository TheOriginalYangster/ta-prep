import React from 'react';
import axios from 'axios';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            tweet: null
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit(e) {
        if (this.state.tweet && this.state.username) {
            axios.post('/post_tweet', this.state)
            .then((res) => console.log(res.data, res.statusText))
            .then(() => {
                document.getElementById('tweet').value = null;
                this.setState({ tweet: null });
            })
            .catch(console.log);
        } else {
            alert('Fill out some text...'); 
        }
            
    }
  
    render() {
        return (
                <div id='message-box'>
                        <h3>Username:</h3>
                        <input type='text' id='username' onChange={this.onChange}></input><br></br>
                        <h3>Tweet:</h3>
                        <input type='text' id='tweet' onChange={this.onChange}></input>
                        <input type='submit' onClick={this.handleSubmit}></input>
                </div>
        )
    }
  }

export default MessageBox;