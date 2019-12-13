import React, { Fragment } from "react";
import { useState, useEffect } from "react";
//import { connect } from "react-redux";
import { getData } from "../../../requests";
import CommentList  from "./commentList";
import CommentInput from "./commentInput";
import serverurl from "../../../heroku";


/*const mapStateToProps = state => {
    return {
      logged: state.user.logged,
      user: state.user.currentUser.username
    };
  };*/

const CommentsContainer = props => {
  const [posts, setPosts] = useState(); /*State Hooks*/
  const {
    title,
    logged,
    user
  } = props; /*Props: título del itinerario, datos de usuario, estado del usuario*/

  /*Funciones de requests: las funciones de Create, Update y Delete llaman a la función de Read
    para actualizar el hook posts; el container las pasa a sus hijos como callbacks*/

  const getComments = () => {
    getData(
      `${serverurl}/api/itineraries/byTitle/${title}/comments`,
      null,
      data => {
        setPosts(data.comments[0].comments);
      }
    );
  };

  const createComment = input => {
    getData(
      `${serverurl}/api/itineraries/byTitle/${title}/comments`,
      {
        method: "PUT",
        body: JSON.stringify({
          username: user,
          text: input
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      () => getComments()
    );
  };

  const updateComment = (input, id) => {
    console.log("update comment");
    console.log(id);
    getData(
      `${serverurl}/api/itineraries/byTitle/${title}/comments/update/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          text: input
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      () => getComments()
    );
  };
  const deleteComment = id => {
    getData(
      `/api/itineraries/byTitle/${title}/comments/delete/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json"
        }
      },
      () => getComments()
    );
  };
  useEffect(() => {getComments()}, []);
  /*Variables para render condicional*/
  /*Si posts es no-nulo, <CommentList> recibe los posts y los mapea*/

  let commentList;
  if (posts != null) {
    commentList = (
      <CommentList
        {...props}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    );
  }
  /*Si estás loggeado aparece el textbox de input*/
  let commentTextBox;
  if (logged) {
    commentTextBox = (
      <CommentInput
        title={title}
        callback={createComment}
        placeholder={"Leave your comment"}
      ></CommentInput>
    );
  } else {
    commentTextBox = (
      <div>
        <span>Log in to comment</span>
      </div>
    );
  }

  return (
    <Fragment>
      {commentList}
      {commentTextBox}
    </Fragment>
  );
};

//export default connect(mapStateToProps)(CommentsContainer);
export default CommentsContainer;

