import React from 'react';
import faker from 'faker';

class Comment extends React.Component {
    render() {
        return (
            <div className='comment'>
                <img src={faker.image.avatar()} alt='Avatar'/>
                <span>{faker.name.firstName()}</span>
                <p>{faker.lorem.paragraph()}</p>
            </div>
        )
    }
}

export default Comment;