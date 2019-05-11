import React from 'react';
import axios from 'axios';

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tweets: []
        }
    }

    getTweets() {
        axios.get('/get_tweets')
        .then((res) => { this.setState({ tweets: res.data }) })
        .catch((err) => console.log('Error getting tweets:', err))
    }


    render() {
        return(
            <div id='tweet-box'>
                <h3>Feed:</h3>
                {this.state.tweets.map((t) =><Tweet username={t.username} tweet={t.tweet} key={t.id}/>)}
            </div>
        )
    }

    componentDidMount() {
        this.getTweets();
    }

}

const Tweet = (props) => (
    <div id='tweet'>
        <p><strong>{props.username}</strong></p>
        <p>{props.tweet}</p>
    </div>
)


export default TweetBox;