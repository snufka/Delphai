import React, { useState } from 'react'
import axios from 'axios'

export default function ApiTable() {
    const [tableData, setTableData] = useState([]);


    const fetchData = async () => {
        const result = await axios.get('http://demo0377384.mockable.io/funding-test');
        console.log(result.data)

        setTableData(result.data);

    };
    fetchData();


    return (
        <div>
            <h1 className="display-4">Funding Rounds Details by Category</h1>
            <table className="table table-bordered">
                <tbody className='datamap'>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Funding Amount</th>
                        <th>Announced Date</th>
                    </tr>
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
