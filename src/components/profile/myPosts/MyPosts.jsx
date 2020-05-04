import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
    return (
        <div className={s.myPosts}> 
            My Posts
            <div>
                <textarea></textarea><br />
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post post="It's my first props" like="2"/>
                <Post post="Post 222222222" like="12"/>
                <Post post="Post 333333333" like="25"/>
            </div>
        </div>
    )
}

export default MyPosts;