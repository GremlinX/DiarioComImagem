import { Card } from "react-bootstrap"
import style from './memoria.module.css'

function Cartao({ creator, title, comment, image }) {
    
    return (
        <div className="p-1"> 
            <app-cartao>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img className={style.cardImg} variant="top" src={URL.createObjectURL(image)} alt={title}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{comment}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{creator}</Card.Footer>
                </Card>
            </app-cartao>
        </div>
    )
}

export default Cartao