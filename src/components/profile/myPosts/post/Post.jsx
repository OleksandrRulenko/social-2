import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.imgur.com/0rxACQL.jpg" />
            Post 1
            <div>Like</div>
        </div>
    )
}

export default Post;