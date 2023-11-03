import { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Card from '../UI/Card/Card';
import SpecificTime from './SpecificTime';
import {SpecificTimeCollection} from './SpecificTimeProps';
import classes from './TodayForecast.module.css';
import next from '../../assets/next.png';
import back from '../../assets/back.png';

const TodayForecast = (props: SpecificTimeCollection) => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(HTMLDivElement);
    const pageRowRef = useRef(HTMLDivElement);
    
    const border = {
        transform: `translateX(${width}px)`
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        if(event.target.dataset.id === "back"){
            if(Math.abs(width) <= containerRef?.current?.clientWidth){
                setWidth(0);
            }else{
                setWidth(width + containerRef?.current?.clientWidth/1.5);
            } 
        }else{
            setWidth(width - containerRef?.current?.clientWidth/1.5);
            if(Math.abs(width) +containerRef?.current?.clientWidth > pageRowRef?.current?.clientWidth - containerRef?.current?.clientWidth){
                const maxWidth = (pageRowRef?.current?.clientWidth - containerRef?.current?.clientWidth) * -1;
                setWidth(maxWidth);
            }
        }
    }

    return (
        <Card className={`${classes.card__items}`}>
            <div>
                <p className={`${classes.weather__title}`}>
                    Today's Forecast
                </p>
            </div>
            <Container className={classes.today_wrapper} ref={containerRef}>
                <button className={`${classes.button} ${classes.back__button} ${width >= 0 ? classes.hide : classes.show}`} data-id="back" onClick={handleButtonClick}>
                    <img src={back} width="20px" data-id="back"/>
                </button>
                <button className={`${classes.button} ${classes.next__button} 
                    ${width === 0 || Math.abs(width) < pageRowRef?.current?.clientWidth - containerRef?.current?.clientWidth
                    ? classes.show : classes.hide}`} data-id="next" onClick={handleButtonClick}>
                    <img src={next} width="20px" data-id="next"/>
                </button>
                <div className={classes.wrapper}>
                    <div className={classes.page__row} style={border} ref={pageRowRef}>
                        {props.datas.map((item, index) => {
                            return (
                                <SpecificTime key={index} time={item.time} code={item.code} temp_c={item.temp_c} />
                            )
                        })}  
                    </div>
                </div>
            </Container>
        </Card>
    )
}

export default TodayForecast;