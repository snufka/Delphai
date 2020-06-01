import React, { useState, useEffect } from 'react'
import { Bubble } from 'react-chartjs-2';



export default function Graph() {
    const [chartData, setChartData] = useState({});
    const chart = () => {
        const labels = ['Beauty', 'Health', 'Games', 'Tools', 'Automative'];

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Beauty',
                    data: [
                        {
                            x: 1,
                            y: 7,
                            r: 90
                        }
                    ],
                    backgroundColor: "#ff6384",
                    hoverBackgroundColor: "#ff6384"
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
                    backgroundColor: "blue",
                    hoverBackgroundColor: "blue"
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
                    backgroundColor: "green",
                    hoverBackgroundColor: "green"
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
                    backgroundColor: "red",
                    hoverBackgroundColor: "red"
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
                    backgroundColor: "black",
                    hoverBackgroundColor: "black"
                }

            ]

        })



    }
    const options = {
        /*  onClick: (e) => {
  
              alert('hello');
  
          },*/
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
        chart()
    }, [])

    return (
        <div>
            <h2 className="display-4">Bubble Chart</h2>
            <div>
                <Bubble data={chartData}
                    options={options}
                    onElementsClick={dataset => console.log(dataset)} />
            </div>
        </div>
    )
}
