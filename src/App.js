import React, { Component } from 'react';
import { robots } from './robots'
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(r => {
            return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <SearchBox searchchange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;