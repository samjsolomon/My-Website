import React from "react";



function PortfolioItem(props){

  
    return(
        
        <div className="col-md-6 col-sm-12 portfolio-item">

          <a href={props.link} >
            <div className="port-imgs">
            <img className="img-fluid port-img" src={props.img} alt=""/>
            <img className="img-hover img-fluid" src={props.gif} alt=""/>
            </div>
          </a>

          <div className="portfolio-caption">
            <h4>{props.title}</h4>
            <p className="text-muted">{props.content}</p>
          </div>
        </div>
      

    );
}

export default PortfolioItem;



