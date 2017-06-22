import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key = {name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className = 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }


}
//get state from reducers/index.js directly, do not need import any reducer
// function mapStateToProps(state){
//   return { weather: state.weather};
// }

//ES6 parameter { weather } === state.weather
function mapStateToProps({ weather }) {
    return { weather };// { weather } === {weather : weather}
}

export default connect(mapStateToProps, null)(WeatherList);
