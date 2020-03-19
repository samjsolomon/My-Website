import React from "react";
import portfolios from "../portfolios";
import PortfolioItem from "./PortfolioItem";


function createPortfolio(pItem){
  return( 
  <PortfolioItem
    key={pItem.key}
   title={pItem.title }
   img = {pItem.img}
   content={pItem.content}
   link = {pItem.link}
   gif = {pItem.gif}
   />

  )};

function Portfolio(){ 
    return(
<section className="page-section portfolio-section" id="portfolio">

    <div className="container">  
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>1
          <h3 className="section-subheading text-muted">Check out some of my work</h3>
        </div>
      </div>
      <div className="row">
      {portfolios.map(createPortfolio)}
    </div>

    </div>
  </section>
)}

export default Portfolio;