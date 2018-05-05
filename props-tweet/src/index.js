import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />{' '}
            <div className="content">
                <NameWithHandle author={tweet.author} /> <Time time={tweet.timestamp} />{' '}
                <Message text={tweet.message} />{' '}
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} /> <LikeButton count={tweet.likes} />{' '}
                    <MoreOptionsButton />
                </div>{' '}
            </div>{' '}
        </div>
    );
}

Tweet.propTypes = {
    tweet: PropTypes.object.isRequired
}
function Avatar({ hash }) {
    let url = `https://s.gravatar.com/avatar/${hash}`;
    return <img className="avatar" alt="avatar" src={url} />;
}

function Message({ text }) {
    return <div className="message"> {text} </div>;
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name"> {name} </span> <span className="handle"> @{handle} </span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return <span className="time"> {timeString} </span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
    return count > 0 ? <span className="retweet-count"> {count} </span> : null;
}

const RetweetButton = ({ count }) => {
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet" />
            {getRetweetCount(count)}
        </span>
    );
};

const LikeButton = ({ count }) => {
    return (
        <span className="like-button">
            <i className="fa fa-heart" />
            {count > 0 && <span className="like-count"> {count} </span>}
        </span>
    );
};
const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button" />;

var testTweet = {
    message: 'Something about cats.',
    gravatar: '3bb38f66f79ca138f318af89fe6b02ec?s=80',
    author: {
        handle: 'catperson',
        name: 'Peter J Smith'
    },
    likes: 2,
    retweets: 5,
    timestamp: '2018-04-10 18:30:30'
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById('root'));
