import React from 'react'
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    LineChart,
    Line
} from "recharts";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 85

const NumberThree = () => {
    const data = [
        {
            month: "JAN",
            number: 1000
        },
        {
            month: "FEB",
            number: 1002
        },
        {
            month: "MAR",
            number: 800
        },
        {
            month: "APR",
            number: 900
        },
        {
            month: "MAI",
            number: 1000
        },
        {
            month: "JUN",
            number: 850
        },
        {
            month: "JUL",
            number: 1100
        },
        {
            month: "AUG",
            number: 820
        },
        {
            month: "SEP",
            number: 800
        },
        {
            month: "OCT",
            number: 780
        },
        {
            month: "NOV",
            number: 700
        },
        {
            month: "DEC",
            number: 1300
        },
    ]
    return (
        <div>
            <div className="display-number-three">
                <div className="content-grid">
                    <div className="content">
                        <p className="title">Indicator 1</p>
                        <p className="subtitle">11 750</p>
                    </div>
                    <div className="content">
                        <p className="title">Indicator 2</p>
                        <p className="subtitle">11 691</p>
                    </div>
                </div>

                <div className="progress-bar">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            strokeLinecap: "butt",
                        })}

                    />
                </div>

                <div className="content-grid">
                    <div className="content">
                        <p className="title">Indicator 4</p>
                        <p className="subtitle">11 331</p>
                    </div>
                    <div className="content">
                        <p className="title">Indicator 5</p>
                        <p className="subtitle">11 525</p>
                    </div>
                </div>


            </div>
            <div className="display-chart">
                <BarChart
                    width={630}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 90,
                        bottom: 5,
                    }}
                    barSize={25}
                >
                    <XAxis
                        dataKey="month"
                        scale="point"
                        padding={{ left: 8, right: 8 }}
                    />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="number" fill="#FFCA03" background={{ fill: "#eee" }} />
                </BarChart>
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line
                        type="month"
                        dataKey="month"
                        stroke="#8884d8"
                        activeDot={{ r: 10 }}
                    />
                    <Line type="monotone" dataKey="number" stroke="#040303" />
                </LineChart>
            </div>

        </div>
    )
}

export default NumberThree
