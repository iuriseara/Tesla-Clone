import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Fade from 'react-reveal/Fade'

function Home() {
    return (
        <Container>
             <Section
                title="Model S"
                description="Order Online for"
                touchless="Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for"
                touchless="Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for"
                backgroundImg="model-3.jpg"
                touchless="Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for"
                backgroundImg="model-x.jpg"
                touchless="Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back Guarantee"
                backgroundImg="solar-panels.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for new Roofs"
                description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />

        <Fade bottom>
            <Footer>
                <li><a href='#'>Tesla © 2021</a></li>
                <li><a href='#'>Privacy & Legal</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Get Newsletter</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Forums</a></li>
                <li><a href='#'>Locations</a></li>
            </Footer>
        </Fade>

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

const Footer = styled.div`
    display: flex;
    padding-bottom: 5vh;
    justify-content: center;

    @media (max-width: 768px) {
        display: inline-flex;
        flex-direction: column;
    }
    
    li {
        padding: 5px 10px;
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 12px;
    }
`