import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.addEntry = this.addEntry.bind(this);
    }

    handleNameUpdate (value) {
        this.setState({
            name: value
        })
    }

    handleAddressUpdate (value) {
        this.setState({
            address: value
        })
    }

    handleCityUpdate (value) {
        this.setState({
            city: value
        })
    }

    handleStateUpdate (value) {
        this.setState({
            state: value
        })
    }

    handleZipUpdate (value) {
        this.setState({
            zip: value
        })
    }

    addEntry(){
        console.log(this.state);
        const { name, address, city, state, zip } = this.state;
        axios.post('/api/houses', this.state).then(results => {
            this.setState({
                name,
                address,
                city,
                state,
                zip
            })
        })
    }

    render() {
        return (
            <div className="Wizard">
                <h2>Wizard</h2>
                <Link to='/'><button className="btn">Cancel</button></Link>
                <p>Property Name:</p><input className="input" value={this.state.name} onChange={ e => this.handleNameUpdate(e.target.value)}></input>
                <p>Address:</p><input className="input" value={this.state.address} onChange={ e => this.handleAddressUpdate(e.target.value)}></input>
                <p>City:</p><input className="input" value={this.state.city} onChange={ e => this.handleCityUpdate(e.target.value)}></input>
                <p>State:</p><input className="input" value={this.state.state} onChange={ e => this.handleStateUpdate(e.target.value)}></input>
                <p>Zip Code:</p><input className="input" value={this.state.zip} onChange={ e => this.handleZipUpdate(e.target.value)}></input>
                <button className="btn" onClick={ this.addEntry }>Complete</button>
            </div>
        )
    }
}