import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import axios from "axios";

export default function Graph() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const labels = ["Beauty", "Health", "Games", "Tools", "Automative"];

    let beautyData = [];
    let healthData = [];
    let gamesData = [];
    let toolsData = [];
    let automativeData = [];

    const waitingforData = async () => {
      axios
        .get("http://demo0377384.mockable.io/funding-test")
        .then((res) => {
          //console.log(res.data);
          for (const dataObj of res.data) {
            if (dataObj.category === "Beauty") {
              beautyData.push(dataObj);
            }
            if (dataObj.category === "Health") {
              healthData.push(dataObj);
            }
            if (dataObj.category === "Games") {
              gamesData.push(dataObj);
            }
            if (dataObj.category === "Tools") {
              toolsData.push(dataObj);
            }
            if (dataObj.category === "Automative") {
              automativeData.push(dataObj);
            }
          }
          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Beauty",
                data: [
                  {
                    x: 1,
                    y: beautyData.length,
                    r: 90,
                  },
                ],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                hoverBackgroundColor: "rgba(255, 99, 132, 1)",
              },
              {
                label: "Health",
                data: [
                  {
                    x: 3,
                    y: healthData.length,
                    r: 40,
                  },
                ],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                hoverBackgroundColor: "rgba(54, 162, 235, 1)",
              },
              {
                label: "Games",
                data: [
                  {
                    x: 5,
                    y: gamesData.length,
                    r: 50,
                  },
                ],
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                hoverBackgroundColor: "rgba(255, 206, 86, 1)",
              },
              {
                label: "Tools",
                data: [
                  {
                    x: 7,
                    y: toolsData.length,
                    r: 20,
                  },
                ],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                hoverBackgroundColor: "rgba(75, 192, 192, 1)",
              },
              {
                label: "Automative",
                data: [
                  {
                    x: 9,
                    y: 2,
                    r: 70,
                  },
                ],
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                hoverBackgroundColor: "rgba(255, 159, 64, 1)",
              },
            ],
          });
        })

        .catch((err) => {
          console.log(err);
        });
    };

    waitingforData();
  };

  const options = {
    events: ["click"],
    title: {
      display: true,
      text: "Number of Funding Round per Category",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 1,
            max: 7,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
          },
        },
      ],
    },
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <h2 className="display-4">Bubble Chart</h2>
      <div>
        <Bubble
          data={chartData}
          options={options}
          //not working
          getElementAtEvent={(elems) => console.log(elems[0]._datasetIndex)}
        />
      </div>
    </div>
  );
}
