import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'


const MyPosts = (props) => {

    let postsElements  = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={s.myPosts}> 
            My Posts
            <div>
                <textarea></textarea><br />
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;