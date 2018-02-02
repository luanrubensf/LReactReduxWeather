import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        let temps = cityData.list.map(weather => weather.main.temp);
        temps = temps.map(temp => temp - 273);

        const pressures = cityData.list.map(weather => weather.main.pressure);
        const hums = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lng={lon}/>
                </td>
                <td>
                    <Chart data={temps} color="red" units="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPA"/>
                </td>
                <td>
                    <Chart data={hums} color="blue" units="%"/>
                </td>
            </tr>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);