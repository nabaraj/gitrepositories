import React, { Component } from 'react';
import "./timeLine.scss"
import { useEffect, useState } from 'react';
import { requestApi } from "./../../utils/service";
// import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    LineChart,
    ResponsiveContainer,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Legend,
    Text
} from "recharts";

import Paper from '@material-ui/core/Paper';



const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
];

export default function TimeLine({ type, userName, className }) {
    const [repos, setRepo] = useState([]);
    const [chartData, setChartData] = useState([]);
    console.log(userName);

    useEffect(() => {
        setUser(userName);
    }, []);
    // const LightTooltip = withStyles((theme) => ({
    //     tooltip: {
    //         backgroundColor: theme.palette.common.white,
    //         color: 'rgba(0, 0, 0, 0.87)',
    //         boxShadow: theme.shadows[1],
    //         fontSize: 11,
    //     },
    // }))(Tooltip);
    const createChartObject = (resultData) => {
        console.log(resultData);
        // let resultData = resultData;
        let chartObject = {};
        resultData.map(item => {
            let itemYear = new Date(item.created_at).getFullYear();
            if (!chartObject[itemYear])
                chartObject[itemYear] = { day: itemYear, count: 0 };
            chartObject[itemYear]["count"]++;
        });
        // console.log(chartObject);
        setChartData(Object.values(chartObject))

    }
    const setUser = (userName) => {
        let requestRepos = {
            url: `https://api.github.com/users/${userName}/repos`,
            method: 'GET'

        }
        requestApi(requestRepos).then(result => {
            console.log("ree", result.data);
            let resultData = result.data;
            if (resultData.length > 0) {
                let data = result.data.sort((a, b) => {

                    var adate = new Date(a.created_at);
                    var bdate = new Date(b.created_at);

                    return adate.getTime() - bdate.getTime();
                });
                // console.log("data ", data);
                createChartObject(data);
                setRepo(data);
                // login(true);
            } else {
                // setError("Check username no result found");
            }
        })

    };
    // const formatDate = (dateString) => {
    //     let date = new Date(dateString);
    //     return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    // }
    // const generateTooltipContent = (item) => {
    //     return <div className="tCon">
    //         <Typography color="inherit">{item.name}</Typography>
    //         <Chip color="primary" size="small" label={item.updated_at} />
    //     </div>
    // }
    return (
        <>

            <div className={`line-chart-wrapper ${className}`}>
                <ResponsiveContainer>

                    <LineChart
                        data={chartData}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <XAxis
                            dataKey="day"
                            tick={{ stroke: '#ffffff' }}
                            axisLine={{ stroke: "#ffffff", strokeWidth: 1 }}
                            tickLine={{ stroke: "#ffffff", strokeWidth: 1 }}
                        />
                        <Tooltip
                            itemStyle={{ color: '#ffffff' }}
                            contentStyle={{ 'background-color': 'rgba(00,00,00,0.8)' }}
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line
                            name="Total Repo"
                            type="monotone"
                            dataKey="count"
                            stroke="#ffffff"
                            strokeWidth={4}

                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* <div className="scrollContent">
                <ul className="timeLineComponent">
                    {repos.length > 0 ?
                        repos.map((item, index) => {
                            let alignment = index % 2 === 0 ? "top" : "bottom";
                            let shouldOpen = index % 5 === 0 ? true : false;
                            return (<li className="list" key={item.name}>
                                {shouldOpen ?
                                    <LightTooltip placement={alignment} arrow open={shouldOpen} title={generateTooltipContent(item)}><span className="bubble"></span></LightTooltip> :
                                    <LightTooltip placement={alignment} arrow title={generateTooltipContent(item)}><span className="bubble"></span></LightTooltip>}
                                <div className="timeLabel">
                                    {formatDate(item.updated_at)}
                                </div>
                            </li>)
                        }) : <li>No repo found</li>

                    }
                </ul>
            </div> */}
        </>
    )
}
