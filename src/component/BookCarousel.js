import React from 'react';
import {Card, Carousel} from 'antd';

export class BookCarousel extends React.Component{

    createContent = (ctx) => {
        const images = ctx.keys().map(ctx);
        console.log(images);
        let result = [];
        for (let i = 0; i < ctx.keys().length; i++) {
            let img = images[i];
            console.log(img);
            result.push(<div style={{float:"right",}}><img  style={{height:300,width:1000,float:"right"}} alt={i} src={img}/></div>);
        }
        return result;
    };


    render(){
        const requireContext = require.context("../assets/carousel", true, /^\.\/.*\.jpg$/);



        return (

            <Carousel autoplay>
                {this.createContent(requireContext)}
            </Carousel>

        )
    }
}


