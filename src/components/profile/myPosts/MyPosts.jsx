import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = (props) => {

    let postsElements  = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text); // Changes the text to state.
    }

    return (
        <div className={s.myPosts}> 
            My Posts
            <div>
                <textarea ref={newPostElement} 
                        className={s.postTextarea}
                        value={props.newPostText}
                        onChange={onPostChange} /><br />
                <button onClick={ onAddPost } className={s.postButton}>Add post</button>
            </div>
            <div className="scroll">
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;