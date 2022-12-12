import React, { useState } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css'

function App() {
    var c = 0;
    console.log(c++)
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')

    if(!robots)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
        
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (!robots.length)
        return <h1 className='tc f1'>Loading</h1>

    return (
        <div className='tc'>
            <h1 className='f1'>Robot Friends</h1>
            <SearchBox searchchange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;