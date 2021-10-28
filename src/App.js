import Tweet from "../components/tweet";
import "./styles.css";

export default function App() {
  /* EDIT ME SO I CONTAIN ALL OF THE DATA
   * THAT IS RENDERED FOR EACH TWEET
   */
  const tweets = [];

  /* EDIT ME SO I DISPLAY A COLUMN OF TWEETS */

  tweets.push(
    <Tweet
      imgSource="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      imgAlt="No profile pic"
      tweetText="I have no idea what I'm doing"
      profileName="Guy"
      username="@randomdude1221"
      date="31 May 2017"
      isVerified={false}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg"
      imgAlt="Elon Musk Profile Picture"
      tweetText="🚀🚀🚀 Doge to the moon! 🚀🚀🚀"
      profileName="Elon Musk"
      username="@elonmusk"
      date="28 Oct 2021"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://variety.com/wp-content/uploads/2016/07/twitter-jack-dorsey-e1533736603829.jpg?w=681&h=383&crop=1&resize=681%2C383"
      imgAlt="Jack Profile Picture"
      tweetText="just setting up my twttr"
      profileName="Jack"
      username="@jack"
      date="26 Mar 2006"
      isVerified={true}
    />
  );
  return tweets;
}
