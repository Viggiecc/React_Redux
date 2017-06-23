import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMapComp from '../components/google_map_component';

class WeatherList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  renderWeather(cityData) {
    const name = cityData.city.name;
    // const temps = cityData.list.map(function(weather) {
    //   return weather.main.temp;
    // });
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //ES6
    const { lat, lon } = cityData.city.coord;
    //=> const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    console.log(typeof lat);
    return (
      <tr key = {name}>
        <td><GoogleMapComp lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color='orange' unit='K'/></td>
        <td><Chart data={pressures} color='green' unit='hPa'/></td>
        <td><Chart data={humidities} color='black' unit='%'/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className = 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
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
