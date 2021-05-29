import React from 'react'
import {Card, Container} from "react-bootstrap"
import { Button } from 'semantic-ui-react'
import YouTube from "@u-wave/react-youtube";

const CourseCard = ({title, background}) => {
  
    return (
        <Container>
        <Card className="mb-5 shadow">
            <Card.Header style={{background:`${background}`}}>
                <h1 className="text-center text-white">{title}</h1>
            </Card.Header>
            <Card.Body>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nulla porro veniam est, tempore dolorem dolores libero explicabo sit.</p>
                <YouTube
                video="tZ2bBqq1rbY" 
                autoplay
                width="100%"
                height="400px"
                />
            </Card.Body>
            <Card.Footer>
                <Button color={background} content="Find More" floated="right"/>
                <Button color={background} content="Register now" floated="right"/>
            </Card.Footer>
        </Card>
        </Container>
    )
}

export default CourseCard
