import React, { useState } from 'react'
import axios from 'axios'

export default function ApiTable() {
    const [tableData, setTableData] = useState([]);
    let id = [];
    let location = [];
    let category = [];
    let fundingAmount = [];
    let announcedDate = [];
    const fetchData = async () => {
        const result = await axios.get('http://demo0377384.mockable.io/funding-test');
        console.log(result.data)

        setTableData(result.data.items || []);
    };
    fetchData();
    //const [TableTerm, setTableTerm] = React.useState("");

    function renderTableData(tableData) {
        return tableData.map((tableinfo, index) => {
            const { id, category, location, fundingAmount, announcedDate } = tableinfo//destructuring
            return (

                <tr key={id}>
                    <td>{id}</td>
                    <td>{category}</td>
                    <td>{location}</td>
                    <td>{fundingAmount}</td>
                    <td>{announcedDate}</td>
                </tr>

            )
        })
    };
    function renderTableHeader() {
        let header = Object.keys(this.state.tableData[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    return (
        <div>
            <h1 className="display-4">Funding Rounds Details by Category</h1>
            <table className="table table-bordered">
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
    )
}
