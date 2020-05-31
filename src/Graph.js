import React, { useState, useEffect } from 'react'
import { Bubble } from 'react-chartjs-2';

/*const data = {
    datasets: [
        {
            label: ['Beauty', 'Health', 'Games', 'Tools', 'Automative'],
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [{ x: 50, y: 50, r: 0 }, { x: 5, y: 5, r: 30 }, { x: 6, y: 7, r: 3 }, { x: 10, y: 7, r: 50 }, { x: 10, y: 7, r: 50 }]
        }

    ]
};*/

export default function Graph() {
    const [chartData, setChartData] = useState({});
    const chart = () => {
        const labels = ['Beauty', 'Health', 'Games', 'Tools', 'Automative'];
        const data = [{ x: 50, y: 50, r: 20 }, { x: 5, y: 5, r: 30 }, { x: 6, y: 7, r: 10 }, { x: 10, y: 30, r: 50 }, { x: 40, y: 40, r: 30 }]
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "Funding By Category",
                    data: data,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: ['rgba(75,192,192,0.4)', 'rgb(255,255,0)', 'rgb(255,192,203)', 'rgb(255,0,255)', 'rgba(75,192,192,0.4)'],
                    borderCapStyle: 'butt',

                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10
                }
            ]
        })


    }
    useEffect(() => {
        chart()
    }, [])

    return (
        <div>
            <h2>Bubble Chart</h2>
            <div>
                <Bubble data={chartData} />
            </div>
        </div>
    )
}
