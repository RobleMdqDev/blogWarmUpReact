import React, { useEffect, useState } from "react";
import axios from "axios";

import PostContainer from "../postcontainer/PostContainer";
import Loader from "../loader/Loader";

import Swal from "sweetalert2";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPost = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then((res) => res.data)
        .then((json) => setPosts(json))
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    };

    getPost();
  }, []);

  console.log(posts);

  return posts ? <PostContainer posts={posts} /> : <Loader />;
};

export default Home;
