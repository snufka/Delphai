import React, { Component } from 'react'
import API from './API'


class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tableData: [
                {
                    id: 101,
                    category: "Beauty",
                    location: "United States",
                    fundingAmount: 36100,
                    announcedDate: "Aug 6, 2019"
                },
                {
                    id: 102,
                    category: "Beauty",
                    location: "United States",
                    fundingAmount: 87200,
                    announcedDate: "Jul 26, 2019"
                },
                {
                    id: 103,
                    category: "Beauty",
                    location: "United States",
                    fundingAmount: 800,
                    announcedDate: "Jan 3, 2018"
                },
                {
                    id: 104,
                    category: "Beauty",
                    location: "United States",
                    fundingAmount: 52500,
                    announcedDate: "Nov 20, 2010"
                },
                {
                    id: 501,
                    category: "Automotive",
                    location: "Kosovo",
                    fundingAmount: 2800,
                    announcedDate: "May 13, 2010"
                },
                {
                    id: 502,
                    category: "Automotive",
                    location: "Kosovo",
                    fundingAmount: 77000,
                    announcedDate: "May 13, 2018"
                }
            ]
        }
    }
    renderTableData() {
        return this.state.tableData.map((tableinfo, index) => {
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
    }
    renderTableHeader() {
        let header = Object.keys(this.state.tableData[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
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
}
export default Table 