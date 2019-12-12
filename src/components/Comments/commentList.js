import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import CommentItem from './commentItem';

const CommentList = (props) => {
    const {
        posts,
        commentUpdate,
        commentDelete,
        title,
        logged,
        user
      } = props

    let comments;

      if(posts != null) {

         comments = (posts.map((comment, index) => (
        
              <CommentItem
                key={`key#${title}#${index}`}
                title={title}
                username={comment.username}
                text={comment.text}
                id={comment.id}
                commentUpdate = {commentUpdate}
                commentDelete = {commentDelete}
                logged ={logged}
                currentUser= {user}
              />
          
          ))
        )
    
    
      }



      return (
          <Fragment>
              {comments}
          </Fragment>
      )
}

export default CommentList