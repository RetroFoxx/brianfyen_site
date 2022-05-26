import * as React from 'react'
import { Badge, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/cards.css'


interface CardProps {
    title: String,
    desc: String,
    status: String
}

const ProjectCard = (data: CardProps) => {
    let completed = data.status === "Complete" ? "success" : "info";
    console.log(completed);

    return (
        <Card className="m-2 h-75 proj-card">
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Badge bg={`${completed}`}>{data.status}</Badge>
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard