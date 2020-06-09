import React, { useState, useEffect } from 'react'
import { Bubble } from 'react-chartjs-2';
//import API from './API'
import axios from 'axios';


export default function Graph() {
    const [chartData, setChartData] = useState({});
    //  const [employeeSalary, setEmployeeSalary] = useState({});
    //const [employeeAge, setEmployeeAge] = useState({});




    const chart = () => {

        const labels = ['Beauty', 'Health', 'Games', 'Tools', 'Automative'];

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'categories[0]',
                    data: [
                        {
                            x: 1,
                            y: 7,
                            r: 90
                        }
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    hoverBackgroundColor: 'rgba(255, 99, 132, 1)'
                },
                {
                    label: 'Health',
                    data: [
                        {
                            x: 3,
                            y: 3,
                            r: 40
                        }
                    ],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    hoverBackgroundColor: 'rgba(54, 162, 235, 1)'
                },
                {
                    label: 'Games',
                    data: [
                        {
                            x: 5,
                            y: 6,
                            r: 50
                        }
                    ],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    hoverBackgroundColor: 'rgba(255, 206, 86, 1)'
                },
                {
                    label: 'Tools',
                    data: [
                        {
                            x: 7,
                            y: 4,
                            r: 20
                        }
                    ],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    hoverBackgroundColor: 'rgba(75, 192, 192, 1)'
                },
                {
                    label: 'Automative',
                    data: [
                        {
                            x: 9,
                            y: 2,
                            r: 70
                        }
                    ],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    hoverBackgroundColor: 'rgba(255, 159, 64, 1)'
                }

            ]

        })



    }


    const options = {
        events: ['click'],
        title: {
            display: true,
            text: 'Number of Funding Round per Category'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 1, max: 7
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0, max: 10
                }
            }]
        }

    }

    useEffect(() => {

        chart();

    }, []);

    return (
        <div>
            <h2 className="display-4">Bubble Chart</h2>
            <div>
                <Bubble data={chartData}
                    options={options}
                // onElementsClick={alert('hello')}
                // onElementsClick={event => { console.log(event.target.value); }}

                />
            </div>
        </div>
    )
}
