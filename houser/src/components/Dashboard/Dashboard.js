import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses').then(response => {
            console.log('hit')
            this.setState({
                houses: response.data
            })
            console.log(response.data)
        }).catch(err => console.log(err));
    }

    // removeEntry(){
    //     axios.delete('/api/houses', (req, res)).then(response => {
    //         this.setState({
    //             houses: response.data
    //         })
    //     }).catch(err => console.log(err));
    // }

    render() {
        const houses = this.state.houses.map(house => {
            return (
                <div key={house.id}>
                    <p>Property Name: {house.name}</p>
                    <p>Address: {house.address}</p>
                    <p>City: {house.city}</p>
                    <p>State: {house.state}</p>
                    <p>Zip: {house.zip}</p>
                </div>
            )
        })
           
        return (
            <div className="Dashboard">
                <h2>Dashboard</h2>
                <Link to='/wizard'><button className="btn">Add New Property</button></Link>
                    <House houses={houses} />
            </div>
        )
    }
}