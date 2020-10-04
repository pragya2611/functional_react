import React from 'react';
import ReactDom from 'react-dom';



const CommentDetail = (props) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image}/>
                </a>

            </div>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">Nice blog Post!</div>
            </div>
        </div>
    )
}

export default CommentDetail;