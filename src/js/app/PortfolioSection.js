import React from 'react'
import PortfolioSubsection from './portfoliosection/PortfolioSubsection'

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 2
        }
        this.setDisplay.bind(this)
    }
    setDisplay(displayType) {
        this.setState({
            display: displayType
        })
    }
    render() {
        const navClass2 = this.state.display == 2 ? "portnav-selected" : ""
        const navClass0 = this.state.display == 0 ? "portnav-selected" : ""
        const navClass1 = this.state.display == 1 ? "portnav-selected" : ""

        const portfolioSections = this.state.display == 2 ?
            [0, 1].map(type =>
                <PortfolioSubsection key={type} display={type}/>
            )
        :
            <PortfolioSubsection display={this.state.display}/>
        return (
            <section id="portfolio">
            <div className="flipcenter">
              <p class="casetext">Click on a book in the bookcase below.<br/>
This opens the book—then click on the right edge<br/> of the pages to flip through the book.</p>
            <iframe style={{width: "800px", height: "500px"}} src="https://anyflip.com/bookcase/yyevu"  seamless="seamless" scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true} ></iframe>
</div>
                <h1 className="section-title">Testimonials / Portfolio</h1>
                <nav id="portfolio-nav">
                    <a
                        onClick={() => this.setDisplay(2)}
                        className={navClass2}
                    >Show All</a>
                    <a
                        onClick={() => this.setDisplay(0)}
                        className={navClass0}
                    >Personal Memoirs</a>
                    <a
                        onClick={() => this.setDisplay(1)}
                        className={navClass1}
                    >Company Histories</a>
                </nav>
                {portfolioSections}
            </section>
        )
    }
}
