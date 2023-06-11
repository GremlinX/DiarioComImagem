import { useState } from "react";
import { Card, Col, Container, Button, Form, Row, FloatingLabel } from "react-bootstrap";
import styles from './memoria.module.css'
import Formulario from "./Formulario";
import Cartao from "./Cartao";

function Memoria(){

    const [cards, setCards] = useState([]);

    const handleFormSubmit = (data) => {
        if (data.image) {
            const imageUrl = URL.createObjectURL(data.image);
            setCards((prevCards) => [...prevCards, { ...data, imageUrl }]);
        } else {
            setCards((prevCards) => [...prevCards, data]);
        }
        console.log(data);
    };

    return (
        <app-memoria>
            <Container fluid>
            <h1 className="text-center m-3">Memories</h1>
                <Row>
                    <Col md='8'>
                        <div className={styles.grid}>
                            {cards.map((card, index) => (
                                <Cartao
                                key={index} 
                                creator={card.creator}
                                title={card.title}
                                comment={card.comment}
                                image={card.imageUrl}/>
                            ))}
                        </div>
                    </Col>
                    <Col md='4'>
                        <Formulario onFormSubmit={handleFormSubmit} />
                    </Col>
                </Row>
            </Container>
        </app-memoria>
    );
}

export default Memoria
