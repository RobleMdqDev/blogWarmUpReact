import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Page404 from "./pages/Page404";
import Home from "./components/home/Home";
import PostContainer from "./components/postcontainer/PostContainer";

import FormPost from "./components/formpost/FormPost";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container fluid className='mt-3'>
        <Row className='justify-content-center'>
          <Switch>            

            <Route exact path='/edit/:idPost' component={FormPost} />

            <Route exact path='/new' component={FormPost} />

            <Route exact path='/post/:idPost' component={PostContainer} />            

            <Route exact path='/' component={Home} />

            <Route exact path='*' component={Page404} />

          </Switch>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
