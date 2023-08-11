import Card from '../UI/Card/Card';
import SpecificTime from './SpecificTime';
import {SpecificTimeCollection} from './SpecificTimeProps';
import './TodayForecast.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




const TodayForecast = (props: SpecificTimeCollection) => {

    return (
        <Card className='card--items'>
            <div>
                <p className='weather--title'>
                    Today's Forecast
                </p>
            </div>
            <Container>
                <Row>
                    {props.datas.map((item, index) => { return <SpecificTime key={index} time={item.time} code={item.code} temp_c={item.temp_c}/>})}
                </Row>
            </Container>
        </Card>
    )
}

export default TodayForecast;