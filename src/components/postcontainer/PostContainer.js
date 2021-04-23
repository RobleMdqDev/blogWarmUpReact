import React, { useEffect, useState } from 'react'
import Post from '../post/Post';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import Loader from '../loader/Loader';

const PostContainer = ({posts}) => {

    const { idPost } = useParams();
    const [post, setPost] = useState(<Loader />)

    useEffect(() => {
       if (idPost) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            .then((res) => res.data)
            .then((post) => setPost(<Post key={post.id} {...post} />))
            .catch((error) => {
            console.error(error)
            });				
        }
        else{
        setPost(posts.map(post => <Post key={post.id} id={post.id} title={post.title} />))
    }  
    }, [idPost, posts]);

        
    return post;

}

export default PostContainer;