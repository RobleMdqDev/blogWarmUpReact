import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Form} from 'react-bootstrap';
import './formpost.css';
import {conEspacios} from '../../funcionConEspacios';

import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const FormPost = () => {

    const { idPost } = useParams();

    const [formContent, setFormContent] = useState({
        title: "",
        body: "",
        idUser: 1
    });

    const handleForm = (e)=>{
        
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })

        console.log(formContent);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let formMood = 'POST';
        if (idPost) {
            formMood = 'PUT';
        }
        
        if(!conEspacios(formContent.title) && !conEspacios(formContent.body)){
            axios({
                method: formMood,
                url: `https://jsonplaceholder.typicode.com/posts/${idPost}`,
                data: formContent,
                headers: {'Content-type': 'application/json; charset=UTF-8'}
            }).then(res=>{
                console.log(res.data);
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message                            
                  })
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Error!"                            
              })
        }
        

    }

    useEffect(() => {
               
                if (idPost) {
                    setFormContent({
                        title: "Loading..",
                        body: "Loading..",
                        idUser: 1
                     });
                     axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`, {headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }})
                     .then((res) => res.data)
                     .then((post) => setFormContent({
                        title: post.title,
                        body: post.body,
                        idUser: 1
                     }))
                     .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.message                            
                          })
                     });				
                 }else{
                    setFormContent({
                        title: "",
                        body: "",
                        idUser: 1
                     }) 
                    } 
    }, [idPost]);

    return (
      <Form className="formPost" onChange={e=>{handleForm(e)}} onSubmit={e=>{handleSubmit(e)}}>
        <Form.Group controlId='postTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' name="title" defaultValue={formContent.title} required/>
        </Form.Group>
        
        <Form.Group controlId='postContent'>
          <Form.Label>Content</Form.Label>
          <Form.Control as='textarea' className="bodyForm" name="body" rows={3} defaultValue={formContent.body} required/>
        </Form.Group>
        
        <Button variant="info" type="submit" value="Confirm">
            Confirm
        </Button>
      </Form>
    );
}

export default FormPost;