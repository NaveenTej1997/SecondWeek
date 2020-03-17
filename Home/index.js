import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Corousil from '../../components/Img-slide';
import Links from '../../components/Lists';
import Paragraph from '../../components/Paragraph';

const Home=props=>{
        return(
                <div>
                        <Header/>
                        <Button/>
                        <Corousil/>
                        <Links/>
                        <Paragraph/>
                </div>
        );
}
export default Home;