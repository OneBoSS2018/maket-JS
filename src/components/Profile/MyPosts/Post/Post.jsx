import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return <div className={s.posts}>
        <div className={s.item}>
            <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"/>
            {props.message}
            <div>
                <span>Like {props.coun}</span>
            </div>
        </div>
    </div>
}

export default Post;