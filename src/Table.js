import React, { Component } from 'react'
import axios from 'axios';

let id = [];
let location = [];
let category = [];
let fundingAmount = [];
let announcedDate = [];

let beautyData = [];
let healthData = [];
let gamesData = [];
let toolsData = [];
let automativeData = [];
axios.get("http://demo0377384.mockable.io/funding-test")
    .then(res => {
        //console.log(res.data);
        for (const dataObj of res.data) {

            fundingAmount.push(dataObj.fundingAmount);

            category.push(dataObj.category);

            id.push(dataObj.id);

            announcedDate.push(dataObj.announcedDate);

            location.push(dataObj.location);

            if (dataObj.category === 'Beauty') {
                beautyData.push(dataObj)
            }
            if (dataObj.category === 'Health') {
                healthData.push(dataObj)
            }
            if (dataObj.category === 'Games') {
                gamesData.push(dataObj)
            }
            if (dataObj.category === 'Tools') {
                toolsData.push(dataObj)
            }
            if (dataObj.category === 'Automative') {
                automativeData.push(dataObj)
            }
        }

    })
    .catch(err => { console.log(err) })
console.log(beautyData, id)

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