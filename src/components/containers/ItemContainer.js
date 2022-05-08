import React from 'react';
import { Link } from 'react-router-dom';
import GradientBackground from '../backgrounds/GradientBackground';
import HeadingButton from '../Headings/Heading_Button';

function ItemContainer(props) {
    return (
        <GradientBackground customStyle={{paddingLeft:100}}>
                <Link  style={{textDecoration:'none'}} to={props.LinkTo} state={props.DataToPass}>
                    <HeadingButton text={props.title} label="See All"/>
                </Link>
                {props.children}
        </GradientBackground>
    );
}

export default ItemContainer;