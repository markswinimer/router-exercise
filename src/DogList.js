import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }
  render() {
    return(
      <div>
          <h1 className="display-1 text-center my-4">Dog List</h1>
          <div className="container">
            <div className="row">
              {this.props.dogs.map(d => (
                <div className="Dog col-lg-4 text-center" key={d.name}>
                    <div className="Dog-container">
                      <Link className="Dog-Container" to={`/dogs/${d.name}`}>
                      <img src={d.src} alt={d.name}/>
                      </Link>
                    </div>
                    <h3>
                      <Link className="underline" to={`/dogs/${d.name}`}>{d.name}</Link>
                    </h3>
                </div>
              ))}
            </div>
          </div>
      </div>
    )
  }
}
export default DogList;
