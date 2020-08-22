import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'


class App extends Component {

  state = {
    cars: [
      {name: 'Audi A8', year: 2017},
      {name: 'Cadillac Escalade', year: 2014},
      {name: 'BMW', year: 2016},
      {name: 'Volkswagen Arteon', year: 2018},
    ],
    pageTitle: 'Super cars',
    backgroundColor: 'grey'
  }

  changeTitle = (newTitle) => {
      this.setState({
        pageTitle: newTitle
      })
    }

    // changeColor = (newColor) => {
    //   this.setState({
    //     backgroundColor: newColor
    //   })
    // }

    // inputColor = (color) => {
    //   this.setState({
    //     backgroundColor: event.target.value
    //   })
    // }

    inputChange = (event) => {
      this.setState({
        pageTitle: event.target.value
      })
    }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const h1Style = {
      color: '#4169E1'
    }

    // const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h1 style={h1Style}>{this.state.pageTitle}</h1>
        {/* <button onClick={this.changeColor}>change bgcolor</button>
        <input type="value" onChange={this.inputColor} /> */}

        { this.state.cars.map((car, index) => {
          return (
            <Car 
              key = {index}
              name = {car.name}
              year = {car.year}
              onChangeTitle = {this.changeTitle.bind(this, car.name + ', ' + car.year)}
            />
          )
        }) }

        {/* <Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.changeTitle.bind(this, cars[0].name + ', ' + cars[0].year)} />
            <Car name={cars[1].name} year={cars[1].year} onChangeTitle={this.changeTitle.bind(this, cars[1].name + ', ' + cars[1].year)} />
            <Car name={cars[2].name} year={cars[2].year} onChangeTitle={this.changeTitle.bind(this, cars[2].name + ', ' + cars[2].year)} /> */}

        <button onClick={this.changeTitle.bind(this, 'Clicked!')}>Press here</button>
        <input type="text" onChange={this.inputChange} />
      </div>
    );
  }
}

export default App;
