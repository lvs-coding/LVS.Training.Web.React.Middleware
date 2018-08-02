import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // this ref attribute is used by react as a reference ot an
        // element that has be rendered to the page : this.refs.map
        return (
            <div>
            <div ref="map" />
            </div>
        );

    }
}

export default GoogleMap;