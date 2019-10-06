import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./DogDetails.css";

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    console.log(this.props)
    return(
        <div className="DogDetails row justify-content-center">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img src={dog.src} alt={dog.name}/>
              <div className="card-body"></div>
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle text-muted">{dog.age} Years Old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, i) => (
                <li className="list-group-item" key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">Go Back</Link>
            </div>
          </div>
        </div>
    )
  }
}
export default DogDetails;
