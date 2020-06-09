import React from 'react';
import Selector from './Selector'
import Graph from './Graph'
import Table from './Table'
//import ApiTable from './ApiTable'
import appStyle from './style/appStyle.css'

function App() {
    return (
        <div className="App">
            <div className="col-10 ">
                <h1 className="display-1">Funding by Industry Analytics</h1>
                <div>
                    <Selector />
                    <Graph />
                    <Table />

                </div>
            </div>
        </div>
    );
}

export default App;
