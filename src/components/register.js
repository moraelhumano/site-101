import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

// import { Link } from "gatsby"
// import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber= this.onChangeNumber.bind(this);
    this.onChangeCountry= this.onChangeCountry.bind(this);
    this.onChangeCity= this.onChangeCity.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      name: "",
      email: "",
      number: "",
      country: "",
      city: "",
      published: false,
      submitted: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeNumber
  (e) {
    this.setState({
      number: e.target.value,
    });
  }

  saveTutorial() {
    let data = {
      email: this.state.email,
      number: this.state.number,
      name: this.state.name,
      country: this.state.country,
      city: this.state.city,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });

      
  }

  newTutorial() {
    this.setState({
      email: "",
      number: "",
      name: "",
      country: "",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
      <section className="container contact-container container-presentation"> 

       <div className="wrapper full-width-por">
            <form className="contact-form full-width-por" action="/thanks">
            <div className="full-width-por">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>

              <div className="full-width-por">
                <label htmlFor="email">Email</label>
                <input
                  type="email"               
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>

              <div className="full-width-por">
                <label htmlFor="number">Número de contacto</label>
                <input
                  type="number"               
                  id="number"
                  required
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                  name="number"
                />
              </div>

              

              <div className="full-width-por">
                <label >País</label>
                <input
                  type="text"               
                  id="country"
                  required
                  value={this.state.country}
                  onChange={this.onChangeCountry}
                  name="country"
                />
              </div>

              <div className="full-width-por">
                <label >Ciudad</label>
                <input
                  type="text"               
                  id="city"
                  required
                  value={this.state.city}
                  onChange={this.onChangeCity}
                  name="city"
                />
              </div>


             <button className="button"  onClick={this.saveTutorial} >Enviar registro 
              <span className="icon -right"  aria-label="arrow" role="img"></span>
              </button>
            </form>
        
        </div>
      </section>
    );
  }
}
