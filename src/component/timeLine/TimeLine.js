import React, { Component } from 'react';
import "./timeLine.scss"
import { useEffect, useState } from 'react';
import { requestApi } from "./../../utils/service";
import Slider from '@material-ui/core/Slider';

export default function TimeLine({ userName }) {
    const [repos, setRepo] = useState([]);
    console.log(userName);

    useEffect(() => {
        setUser(userName);
    }, []);

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
                console.log("data ", data);

                setRepo(data);
                // login(true);
            } else {
                // setError("Check username no result found");
            }
        })

    };
    return (
        <>

            <ul className="timeLineComponent">
                {repos.length > 0 ?
                    repos.map(item => {
                        return (<li className="list" key={item.name}>
                            <span className="bubble"></span>
                            <div className="timeLineborder"></div>
                        </li>)
                    }) : <li>No repo found</li>

                }
            </ul>
        </>
    )
}
