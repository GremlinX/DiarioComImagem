import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";

function Formulario() {

    return (
        <app-formulario>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Nome" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Sobrenome" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Apelido" />
                        </Col>
                    </Row>
                </Container>
            </Form>
        </app-formulario>
    )
}

export default Formulario;