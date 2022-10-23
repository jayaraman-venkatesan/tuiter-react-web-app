import tweetsArray from './tweets.json'
import TweetSummaryItem from './tweet-summary-item';
import "./index.css";

const HomeComponent = () => {

    return (
        <ul>
          {
       tweetsArray.map(post =>
         <TweetSummaryItem
           key={post._id} tweet={post}/> )
     }
           
        </ul>
    );

}

export default HomeComponent;
