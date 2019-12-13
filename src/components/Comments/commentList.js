import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import CommentItem from './commentItem';
import { View, ScrollView } from 'react-native';

<<<<<<< HEAD
const CommentList = (props) => {
    const {
        posts,
        updateComment,
        deleteComment,
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
                updateComment = {updateComment}
                deleteComment = {deleteComment}
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
=======
const CommentList = ({
  posts,
  updateComment,
  deleteComment,
  title,
  logged,
  user
}) => {


  let comments;

  if (posts != null) {

    comments = (posts.map((comment, index) => (

      <CommentItem
        key={`key#${title}#${index}`}
        title={title}
        username={comment.username}
        text={comment.text}
        id={comment.id}
        updateComment={updateComment}
        deleteComment={deleteComment}
        logged={logged}
        currentUser={user}
      />

    ))
    )


  }


  console.log('this is comment list')
  return (
    <Fragment>
      {comments}
    </Fragment>
  )
>>>>>>> 15e6bacf50dd28eb0d559b628a43d640c4b6ccee
}

export default CommentList
