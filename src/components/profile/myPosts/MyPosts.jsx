import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/formsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" 
                    validate={[required, maxLength10]}
                    placeholder={"Post message ..."}
                    component={Textarea} />
            </div>
            <div>
                <button>Add post</button>    
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElements  = props.posts.map( p => <Post post={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myPosts}> 
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className="scroll">
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;