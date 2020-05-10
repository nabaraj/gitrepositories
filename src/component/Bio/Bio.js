import React, { useEffect, useState } from 'react';
import { requestApi } from "../../utils/service";
import Avatar from '@material-ui/core/Avatar';


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Bio.scss"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));
/**
 * 
 * @param {*username} param0 
 * {
        "login": "nabaraj",
        "id": 270182,
        "node_id": "MDQ6VXNlcjI3MDE4Mg==",
        "avatar_url": "https://avatars2.githubusercontent.com/u/270182?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/nabaraj",
        "html_url": "https://github.com/nabaraj",
        "followers_url": "https://api.github.com/users/nabaraj/followers",
        "following_url": "https://api.github.com/users/nabaraj/following{/other_user}",
        "gists_url": "https://api.github.com/users/nabaraj/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/nabaraj/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/nabaraj/subscriptions",
        "organizations_url": "https://api.github.com/users/nabaraj/orgs",
        "repos_url": "https://api.github.com/users/nabaraj/repos",
        "events_url": "https://api.github.com/users/nabaraj/events{/privacy}",
        "received_events_url": "https://api.github.com/users/nabaraj/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Nabaraj saha",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": true,
        "bio": "I am a Front End Developer, having 8 years of experience with skills Javascript, Reactjs, angularjs, NodeJS, jQuery, Html, CSS, responsive web design.",
        "public_repos": 60,
        "public_gists": 2,
        "followers": 3,
        "following": 11,
        "created_at": "2010-05-07T06:47:52Z",
        "updated_at": "2020-04-28T13:49:29Z"
    }
 */
export default function Bio({ userName }) {
    const [bioData, setBio] = useState({
        loading: false,
        user: null
    });
    // const [loading, setLoader] = useState(true)
    const classes = useStyles();
    const loadImage = () => {
        let randomNumber = Math.floor(Math.random() * 999) + 1;
        let dummysrc = `https://i.picsum.photos/id/${randomNumber}/1200/400.jpg`;
        return dummysrc;
    }
    useEffect(() => {
        // setLoader(true);
        setBio({ loading: true })
        let requestOption = {
            url: `https://api.github.com/users/${userName}`,
            method: 'GET'
        }
        requestApi(requestOption).then(res => {
            console.log('bio ', res.data);
            // setLoader(false)
            setBio({ user: res.data })
        })
    }, [])
    const { loading, user } = bioData;
    return (
        // { loading?<CircularProgress /> : 
        (<Container maxWidth="md">
            <Card>
                {loading && <CircularProgress />}
                {user &&
                    <>
                        <div className="mediaContent">
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={loadImage()}
                                onError={loadImage()}
                                title="Header"
                            />
                            <div className="blurBg">

                                <div className="bioHeaderContainer">
                                    <Avatar alt="Remy Sharp" className="MuiAvatar-rounded" src={user.avatar_url} />
                                    <Typography variant="h5" color="textSecondary" component="h5">
                                        {user.name}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <CardContent>
                            <Typography paragraph variant="p" color="textSecondary" component="p"></Typography>
                            <Typography paragraph variant="p" color="textSecondary" component="p">
                                {user.bio}
                            </Typography>
                            <div className="header-chips">
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    className="MuiChip-rounded"
                                    size="small"
                                    avatar={<Avatar className="MuiAvatar-rounded">{user.public_repos}</Avatar>}
                                    label="Public Repos"

                                />
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    className="MuiChip-rounded"
                                    size="small"
                                    avatar={<Avatar className="MuiAvatar-rounded">{user.following}</Avatar>}
                                    label="Following"

                                />
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    className="MuiChip-rounded"
                                    size="small"
                                    avatar={<Avatar className="MuiAvatar-rounded">{user.public_gists}</Avatar>}
                                    label="Public Gists"

                                />
                                <Chip
                                    size="small"
                                    className="MuiChip-rounded"
                                    size="small"
                                    variant="outlined"
                                    avatar={<Avatar className="MuiAvatar-rounded">{user.followers}</Avatar>}
                                    label="Followers"

                                    boxShadow={3}
                                />

                            </div>
                        </CardContent>
                    </>
                }

            </Card>

        </Container>)

    )
}
