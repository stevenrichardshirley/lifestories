import React from 'react'

export default class TitleBar extends React.Component {
    render() {
        return (
            <div id="titlebar">
                <div id="logo-container">
                    <img id="logo-img" src="images/ls1500.png"/>
                    <div id="logo-contact">
                        <p id="logo-phone">214-288-2262</p>
                        <p id="logo-email">Chad@LifeStoriesCompany.com</p>
                    </div>
                </div>
                <nav id="nav">
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        )
    }
}
