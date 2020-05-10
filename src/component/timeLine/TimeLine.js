import React, { Component } from 'react';
import "./timeLine.scss"
import { useEffect, useState } from 'react';
import { requestApi } from "./../../utils/service";
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';

import TimelineIcon from '@material-ui/icons/Timeline';
import { Typography, CardContent, CardActionArea, Card } from '@material-ui/core';

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
import { CircularProgress } from '@material-ui/core';

export default function TimeLine({ type, userName, className }) {
    const [repos, setRepo] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoader] = useState(false);

    console.log(userName);
    let pageCount = 1;
    useEffect(() => {
        setLoader(true)
        getRepos(userName, pageCount, []);
    }, []);

    const createChartObject = (resultData) => {
        setRepo(resultData);
        let chartObject = {};
        resultData.map(item => {
            let itemYear = new Date(item.created_at).getFullYear();
            if (!chartObject[itemYear])
                chartObject[itemYear] = { day: itemYear, count: 0 };
            chartObject[itemYear]["count"]++;
        });

        // let oldChartData = [chartData, ...Object.values(chartObject)];
        setLoader(false);
        setChartData(Object.values(chartObject));

    }
    const getRepos = (userName, count, totalRes) => {

        let requestRepos = {
            url: `https://api.github.com/users/${userName}/repos?page=${count}`,
            method: 'GET'

        }
        requestApi(requestRepos).then(result => {

            // console.log("ree", result.data);
            let resultData = result.data;
            if (resultData.length > 0) {
                let data = result.data.sort((a, b) => {

                    var adate = new Date(a.created_at);
                    var bdate = new Date(b.created_at);

                    return adate.getTime() - bdate.getTime();
                });
                console.log("data ", data);
                totalRes.push(...data);


                pageCount++;
                getRepos(userName, pageCount, totalRes);
            } else {
                setRepo(totalRes)
                createChartObject(totalRes);
            }
        })

    };

    return (

        <Card>
            {!loading && <CardActionArea>
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
            </CardActionArea>}
            <CardContent>

                {loading ?
                    <CircularProgress></CircularProgress> :
                    <><Typography variant="h5" color="textSecondary" component="h5">
                        <TimelineIcon /> Timeline
                                    </Typography>
                        <p>Total {repos.length} repos</p></>
                }
            </CardContent>
        </Card>
    )
}
