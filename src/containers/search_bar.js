import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        // The value of the input is mapped to this.state.term, default is an empty string to have
        // an empty input when we launch the app
        this.state = { term: ''};

        // We have to bind onInputChange context to SearchBar context else when we use "this" 
        // in onInputChange it will have the wrong context due to callback function. So with 
        // this line we bind onInputChange context to SearchBar context
        this.onInputChange = this.onInputChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="from-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);