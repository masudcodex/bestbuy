import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: absolute;
    overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    text-align: center;
    
`;
const Image = styled.img`
    height: 90%;
`;
const TextContainer = styled.div`
    flex: 1;
    padding: 60px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 30px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: transparent;
`;


const Slider = () => {
    const [sliderItem, setSliderItem] = useState([]);
    useEffect(()=>{
        fetch(`slider.json`)
        .then(res=> res.json())
        .then(data=> setSliderItem(data))
    },[])
    console.log(sliderItem);
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = direction => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon></ArrowBackIosNewOutlinedIcon>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItem.map(item=>
                    <Slide bg={item.bg}>
                        <ImageContainer>
                            <Image src={item.img}></Image>
                        </ImageContainer>
                        <TextContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </TextContainer>
                    </Slide>)
                }
                
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
            </Arrow>
        </Container>
    );
};

export default Slider;