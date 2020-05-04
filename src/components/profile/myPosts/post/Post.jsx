import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.imgur.com/0rxACQL.jpg" />
            {props.post}
            <div>Like {props.like}</div>
        </div>
    )
}



export default Post;