import React from 'react';
import Selector from './Selector'
import Graph from './Graph'
import Table from './Table'
import appStyle from './style/appStyle.css'

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
