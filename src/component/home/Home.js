import React, { useState } from 'react';
import LoginUser from "./../login/login";
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import WatchComponent from "./../watchComponent/WatchComponent";

import axios from "axios";



export default function Home() {
    const [isLogged, login] = useState(true);
    const [repo, setRepo] = useState([]);
    const [userError, setError] = useState("");
    const [userName, setUserName] = useState('');

    return (
        <>
            <Snackbar open={true} className="MuiSnackbar-anchorOriginTopLeft customTop" autoHideDuration={null}>
                <Paper><WatchComponent></WatchComponent></Paper>
            </Snackbar>
            <LoginUser />
        </>
    )
}
