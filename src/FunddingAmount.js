import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
//import API from './API'
import axios from "axios";

export default function FunddingAmount() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const labels = ["Beauty", "Health", "Games", "Tools", "Automative"];

    let beautyData = [];
    let beautyFundSum = 0;
    let beautyFund = [];

    let healthData = [];
    let healthFundSum = 0;
    let healthFund = [];

    let gamesData = [];
    let gamesFundSum = 0;
    let gamesFund = [];

    let toolsData = [];
    let toolsFundSum = 0;
    let toolsFund = [];

    let automativeData = [];
    let automativeFundSum = 0;
    let automativeFund = [];

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    const waitingforData = async () => {
      axios
        .get("http://demo0377384.mockable.io/funding-test")
        .then((res) => {
          console.log(res.data);
          for (const dataObj of res.data) {
            if (dataObj.category === "Beauty") {
              //pushong isn't working nly takes first match
              beautyData.push(dataObj);
              beautyFund.push(dataObj.fundingAmount);
              beautyFundSum = beautyFund.reduce(reducer);
            }
            if (dataObj.category === "Health") {
              healthData.push(dataObj);
              healthFund.push(dataObj.fundingAmount);
              healthFundSum = healthFund.reduce(reducer);
            }
            if (dataObj.category === "Games") {
              gamesData.push(dataObj);
              gamesFund.push(dataObj.fundingAmount);
              gamesFundSum = gamesFund.reduce(reducer);
            }
            if (dataObj.category === "Tools") {
              toolsData.push(dataObj);
              toolsFund.push(dataObj.fundingAmount);
              toolsFundSum = toolsFund.reduce(reducer);
            }
            if (dataObj.category === "Automative") {
              automativeData.push(dataObj);
              automativeFund.push(dataObj.fundingAmount);
              automativeFundSum = automativeFund.reduce(reducer);
            }
          }

          console.log(
            beautyData,
            healthData,
            gamesData,
            toolsData,
            automativeData
          );
          ///x=1 ,x+2
          //y=dataObj.fundingAmount

          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Beauty",
                data: [
                  {
                    x: 1,
                    y: beautyFundSum,
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
                    y: healthFundSum,
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
                    y: gamesFundSum,
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
                    y: toolsFundSum,
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
                    y: automativeFundSum,
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
      text: "Funding Amount",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 2000,
            max: 4800000,
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
      <div>
        <Bubble
          data={chartData}
          options={options}
          getElementAtEvent={(elems) => console.log(elems[0]._datasetIndex)}
        />
      </div>
    </div>
  );
}
