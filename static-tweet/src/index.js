import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle /><Time/>
                <Message />
                <div className="buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
                </div>
            </div>{' '}
        </div>
    );
}

function Avatar() {
    return (
        <img
            className="avatar"
            alt="avatar"
            src="https://s.gravatar.com/avatar/3bb38f66f79ca138f318af89fe6b02ec?s=80"
        />
    );
}

function Message() {
    return <div className="message"> This is less than 140 characters. </div>;
}

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name"> Peter J Smith </span>{' '}
            <span className="handle"> @pjstarifa </span>{' '}
        </span>
    );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => <i className="fa fa-ellipsis more-options-button" />;

ReactDOM.render(<Tweet />, document.getElementById('root'));
