import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const RealTimeChart = ({ btcPrice }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                type: "line",
                label: "Bitcoin Price (USD)",
                data: [],
                borderColor: "#FF6384",
                borderWidth: 4,
                yAxisID: "y-axis-price",
                fill: false,
                order: 0,
            },
            {
                type: "bar",
                label: "Trading Volume",
                data: [],
                backgroundColor: "#36A2EB",
                yAxisID: "y-axis-volume",
            },
        ],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (btcPrice) {
                // console.log(btcPrice)
                const btcPriceFloat = parseFloat(btcPrice.replace(/,/g, ""));
                // console.log(btcPriceFloat)
                const now = new Date();
                const timeLabel = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
                const volume = btcPriceFloat / (Math.random() * 8 + 2);

                setChartData((prevData) => {
                    const newLabels = [...prevData.labels, timeLabel];
                    const newPriceData = [...prevData.datasets[0].data, btcPriceFloat];
                      const newVolumeData = [...prevData.datasets[1].data, volume.toFixed(2)];

                    if (newLabels.length > 10) {
                        newLabels.shift();
                        newPriceData.shift();
                        newVolumeData.shift();
                    }

                    return {
                        ...prevData,
                        labels: newLabels,
                        datasets: [
                            { ...prevData.datasets[0], data: newPriceData },
                              { ...prevData.datasets[1], data: newVolumeData },
                        ],
                    };
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [btcPrice]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
            "y-axis-price": {
                type: "linear",
                position: "left",
                stacked: false,
                title: {
                    display: true,
                    text: "Price (USD)",
                },
                ticks: {
                    beginAtZero: false
                },
                min: Math.min(...chartData.datasets[0].data) - 1,
                max: Math.max(...chartData.datasets[0].data) + 1,
            },
            "y-axis-volume": {
                type: "linear",
                position: "right",
                stacked: false,
                title: {
                    display: true,
                    text: "Volume",
                },
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <Line data={chartData} options={options} />
    );
};

export default RealTimeChart;
