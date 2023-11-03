import react from 'react';
import { Container, Col, Row } from "react-bootstrap";
import {Outlet} from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import classes from "./RootLayout.module.css";
import RootLayoutProps from "./RooutLayoutProps";
import CitiesProps from '../../components/SearchBar/CitiesProps';
import SearchBar from '../../components/SearchBar/SearchBar';

const RootLayout = (props: RootLayoutProps) =>{
    const handleResult = (city: CitiesProps) => {
        props.onSendResult(city);
    };

    return(
        <Container className={`p-3 ${classes.text} ${classes.background}`} fluid="md">
        <Row>
          <Col className={`p-3 ${classes.padding}`}>
            <Navbar/>
          </Col>
          <Col xs={12}>
            <SearchBar onResult={handleResult} />
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    )
}

export default RootLayout;