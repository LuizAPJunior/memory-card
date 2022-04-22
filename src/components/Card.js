import { useState, useEffect} from 'react';
import '../assets/styles/Card.css'

function Card(props) {

    const [click, setClick] = useState(0);

    const handleClick = () => {
        setClick(click + 1);
    }

    const reset = () => {
        setClick(0);
    }

    useEffect(() => {
       
        
        if (click == 0) props.startGame();
        if (click == 1) props.changeScore();
        if (click > 1) {
            props.gameOver();
            reset();
        }
    }, [click]);

    useEffect(()=>{
        if (props.reset == true) {
            reset();
        }
    })


    return (
        <div className='card' onClick={handleClick}>
            <img src={props.image}></img>
            <p>{props.name}</p>
        </div>
    );
}

export default Card;