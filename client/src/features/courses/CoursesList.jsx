import React from "react";
import { Card } from "react-bootstrap";
import Footer from "../../components/Footer";
import CourseCard from "./CourseCard";
import { Container, Header } from "semantic-ui-react";

const CoursesList = () => {
  return (
      <>
    <Container className="mt-3">
     
      <div className="row">
        <div className="col-md-8">
        <Header as="h1" content="Your French Courses" textAlign="center" basic/>
      <Header as="h3" content="Register now and learn French" textAlign="center" basic/>
          <CourseCard title="Beginner Courses" background="blue" />
          <CourseCard title="Intermediate Courses" background="green" />
          <CourseCard title="Advance Courses" background="red" />
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Header>
              <h1>Lorem ipsum dolor sit amet !</h1>
            </Card.Header>
            <Card.Body>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vitae totam minima dolores nostrum veritatis quos recusandae at obcaecati debitis, explicabo possimus dolorum tempore a aliquid itaque delectus, nam vel.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laborum dolores cumque doloremque eaque aut exercitationem voluptates odit veritatis. Quos doloribus omnis voluptas velit explicabo reiciendis? Esse velit animi magnam?</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
      <Footer />
    </>
  );
};

export default CoursesList;
