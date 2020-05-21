import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'


const MyPosts = (props) => {

    let postsElements  = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
        // props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
        // props.updateNewPostText(text);
    }

    return (
        <div className={s.myPosts}> 
            My Posts
            <div>
                <textarea ref={newPostElement} 
                        className={s.postTextarea}
                        value={props.newPostText}
                        onChange={onPostChange} /><br />
                <button onClick={ addPost } className={s.postButton}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;