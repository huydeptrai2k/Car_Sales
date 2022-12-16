import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Tin tức - Sự kiện" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
          <Col lg='12 ' className='mt-2 mb-2 text-center'>
          <button className='car__item-btn'><Link to={'#'}>Xem thêm</Link></button>
        </Col>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;