import React from 'react'
import Comment from '../components/Comment'

const CommentContainer = (props) => {

    return (
        <div className="comments">
            {props.comments.map (comment => {
                return <Comment comment={comment} jmod={props.jmod} />
            })}
        </div>
    )
}

export default CommentContainer