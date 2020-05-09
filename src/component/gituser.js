import React, { useEffect, useState } from "react";
import Bio from "./Bio/Bio";
import TimeLine from "./timeLine/TimeLine";
import { Box, Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';



function GitUser(props) {
  let userName = props.match.params.userName;
  const [resultLoaded, setLoader] = useState(false);

  useEffect(() => {
    // if (!resultLoaded) {
    //   setLoader(true);
    // }
  }, [resultLoaded]);
  const genarateDate = dateValue => {
    var date = new Date(dateValue);
    return (
      <span className="time">
        {date.getFullYear()} -{" "}
        {date.toLocaleString("default", { month: "long" })}
      </span>
    );
  };
  return (

    <div>
      <Bio userName={userName}></Bio>

      <Container maxWidth="md" className="mt12">
        <Grid container spacing={3}>

          <Grid item xs>
            <Card>
              <CardActionArea>
                <TimeLine
                  type="Line"
                  className="greenBG"
                  userName={userName}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs>
            <Paper>
              <TimeLine
                type="Area"
                className="greenBG"
                userName={userName}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/* <ul className="timeline">
        {props.repo.map((item, index) => (
          <li key={item.id}>
            <div
              className={`${
                index === 0 || index % 2 === 0 ? "direction-r" : "direction-l"
                }`}
            >
              <div className="flag-wrapper">
                <span className="flag">
                  <a href={item.html_url} target="_blank">
                    {item.name}
                  </a>
                </span>
                <span className="time-wrapper">
                  {genarateDate(item.created_at)}
                </span>
              </div>
              <div className="desc">{item.description}</div>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default GitUser;
