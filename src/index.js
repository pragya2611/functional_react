import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Jane" timeAgo="Today at 4:50 AM" image={faker.image.avatar()}/>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));