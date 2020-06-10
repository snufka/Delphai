import React, { useState, useEffect } from 'react'
import { Bubble } from 'react-chartjs-2';
//import API from './API'
import axios from 'axios';

export default function FunddingAmount() {
    const [chartData, setChartData] = useState({});
    //  const [employeeSalary, setEmployeeSalary] = useState({});
    //const [employeeAge, setEmployeeAge] = useState({});




    const chart = () => {

        const labels = ['Beauty', 'Health', 'Games', 'Tools', 'Automative'];


        let beautyData = [];
        let healthData = [];
        let gamesData = [];
        let toolsData = [];
        let automativeData = [];
        //let reducer = (accumulator, currentValue) => accumulator + currentValue;

        const waitingforData = async () => {
            axios.get("http://demo0377384.mockable.io/funding-test")
                .then(res => {
                    //console.log(res.data);
                    for (const dataObj of res.data) {

                        if (dataObj.category === 'Beauty') {
                            //pushong isn't working nly takes first match
                            beautyData.push(dataObj);

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

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                label: 'Beauty',
                                data: [
                                    {
                                        x: 1,
                                        y: beautyData.fundingAmount,
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
                                        y: healthData.fundingAmount,
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
                                        y: gamesData.fundingAmount,
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
                                        y: toolsData.fundingAmount,
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
                                        y: automativeData.fundingAmounts,
                                        r: 70
                                    }
                                ],
                                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                hoverBackgroundColor: 'rgba(255, 159, 64, 1)'
                            }

                        ]

                    })

                })

                .catch(err => { console.log(err) })
        }

        waitingforData();


    }


    const options = {
        events: ['click'],
        title: {
            display: true,
            text: 'Funding Amount'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 2000, max: 4800000
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

