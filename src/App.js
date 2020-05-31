import React from 'react';
import Selector from './Selector'
import Graph from './Graph'
import Table from './Table'

function App() {
    return (
        <div className="App">
            <h1>Funding by Industry Analytics</h1>
            <div>
                <Selector />
                <Graph />
                <Table />
            </div>
        </div>
    );
}

export default App;
