import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'

// **************************************

let postData = [
    {id: 1, message: "It's my first props", likesCount: 12},
    {id: 2, message: 'Post 222222222', likesCount: 3},
    {id: 3, message: 'Post 333333333', likesCount: 4},
]

let post = postData.map( p => <Post post={p.message} likesCount={p.likesCount}/> )

// **************************************

const MyPosts = () => {
    return (
        <div className={s.myPosts}> 
            My Posts
            <div>
                <textarea></textarea><br />
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
                {/* <Post post={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post post={postData[1].message} likesCount={postData[1].likesCount}/> */}
            </div>
        </div>
    )
}

export default MyPosts;