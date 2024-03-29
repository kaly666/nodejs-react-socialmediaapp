import './Post.css';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function Post(props) {
    let [shortText, setShortText] = useState(props.text.substring(0, 100) + '...');

    return (
        <div className="Post">
            <p className='PostAuthor'>{props.author}</p>
            <img className='PostImage' src={props.image} alt=':C Failed to load'/>
            <h5 className='PostTitle'>{props.title}</h5>
            <span className='PostLikes'>{props.likes} <FaHeart /></span>
            <p className='PostText'>{shortText}</p>
            <span className='PostReadMore' onClick={() => setShortText(props.text)}>{shortText.length < props.text.length ? 'Read more' : ''}</span>
        </div>
    );
}


export default Post;