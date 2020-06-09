import React, { useState } from 'react'
import axios from 'axios'

export default function ApiTable() {
    const [tableData, setTableData] = useState([]);
    let beautyData = [];
    let healthData = [];
    let gamesData = [];
    let toolsData = [];
    let automativeData = [];

    const fetchData = async () => {
        const result = await axios.get('http://demo0377384.mockable.io/funding-test');
        console.log(result.data)
        if (result.data.category === 'Beauty') {
            beautyData.push(result.data)
        }
        if (result.data.category === 'Health') {
            healthData.push(result.data)
        }
        if (result.data.category === 'Games') {
            gamesData.push(result.data)
        }
        if (result.data.category === 'Tools') {
            toolsData.push(result.data)
        }
        if (result.data.category === 'Automative') {
            automativeData.push(result.data)
        }
        setTableData(result.data);
    };
    fetchData();


    return (
        <div>
            <h1 className="display-4">Funding Rounds Details by Category</h1>
            <table className="table table-bordered">
                <tbody className='datamap'>

                    {tableData &&
                        tableData.map((tableinfo, index) => {
                            const { id, category, location, fundingAmount, announcedDate } = tableinfo

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
                </tbody>
            </table>
        </div>
    )
}
