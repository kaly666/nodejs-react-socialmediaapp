import Post from "../../Components/Post/Post"
import FeedContent from "../../FeedMock.json"
import './Feed.css';

function Feed() {
    return (
        <div className="Feed">
            {GetFeedContent()}
        </div>
    )
}

function GetFeedContent() {
    let feedContent = [];
    for (let i = 0; i < FeedContent.length; i++) {
        feedContent.push(<Post key={i} author={FeedContent[i].author} image={FeedContent[i].image} title={FeedContent[i].title} likes={FeedContent[i].likes} text={FeedContent[i].text} />);
    }
    return feedContent;
}

export default Feed;