import React from "react";
import ReactDOM from "react-dom";
import MessageBox from "./components/messageBox.jsx";
import TweetBox from "./components/tweetBox.jsx";

const App = () => {
  return (
    <>
    <h1>T W I D D E R ! ! !</h1>
    <MessageBox />
    <TweetBox />
    </>
  )
};



ReactDOM.render(<App />, document.getElementById("app"));
//