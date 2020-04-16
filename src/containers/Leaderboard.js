import React from "react"
import QuizCard from '../components/QuizCard'
import { Container, Row, Col } from 'react-bootstrap';

function Leaderboard(props) {

    function allQuizzes() {
        return props.allQuizzes.map((thisQuiz, index) => {
            return (<Col><QuizCard key={thisQuiz.id} key={index} quiz={thisQuiz}/></Col>)
        })
    }
    
    return (
        <Container fluid="md">
            <h2>Click on a quiz to see high scores!</h2>
            <Row>
                {allQuizzes()}
            </Row>
        </Container>
    )
}

export default Leaderboard