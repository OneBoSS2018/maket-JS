import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData =[
        {id: 1, message: 'Hello!', likes: 12},
        {id: 2, message: 'I learn React.', likes: 22},
        {id: 3, message: 'It\'s my first post in react!', likes: 1}
    ]

    let postsElement = postData.map( post => <Post message={post.message} coun={post.likes}/> );
    return <div>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>

            <div>
                <button>New Post</button>
            </div>

        </div>
        <div>
            { postsElement }
        </div>
    </div>
}

export default MyPosts;