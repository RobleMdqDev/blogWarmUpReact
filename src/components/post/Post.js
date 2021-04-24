import React from "react";
import "./post.css";
import fondo from "../../assets/img/fondonegro.jfif";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Post = ({ title, id, userId, body }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://jsonplaceholder.cypress.io/posts/${id}`, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      }
    });
  };

  return (
    <>
      <div className='post'>
        <img alt='post img' src={fondo} />
        <h3 className='post-title'>{title}</h3>
        <p>{body}</p>
      </div>
      <div className='post-btn'>
        <Link to={`/edit/${id}`}>
          <button className='btn btn-info' onClick={() => {}}>
            <FontAwesome name='pencil' className='post-icon' />
          </button>
        </Link>
        <button className='btn btn-danger'>
          <FontAwesome
            name='trash'
            className='post-icon'
            onClick={handleDelete}
          />
        </button>
        <Link to={`/post/${id}`}>
          <button className='btn btn-dark'>
            <FontAwesome name='bars' className='post-icon' />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Post;
