import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
    const {name, flag, region} = props;

    return (
        <Card className="my-4  padding-10px mx-4" border="dark" style={{width:'13.5rem',height:'13.5rem',paddingLeft:20,backgroundColor:'#ECE7CA',borderWidth: 2,}}>
            <Link to={`/country/${name}`}></Link>

            <Card.Img className='h-50 w-708'style={{paddingTop:13}} src={flag} variant='top' />
            <Card.Body>
                <Card.Title>
                    <Link to={`/country/${name}`}>{props.name}</Link>
                </Card.Title>
                <p>{region}</p>
            </Card.Body>
        </Card>
    )
}

export default CountryCard;
