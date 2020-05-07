
import React, { Component } from "react";
import { requestApi } from "../../utils/service";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ClearIcon from '@material-ui/icons/Clear';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { Redirect } from 'react-router-dom';
import './login.scss';



const debounce = require('lodash.debounce');


class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      userList: [],
      isFocused: false,
      gitUser: ""
    };
    this.changeValue = this.changeValue.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.getValue = this.getValue.bind(this);
    this.focusOut = this.focusOut.bind(this);
    this.focusIn = this.focusIn.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  changeValue(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
    if (value.length > 3) {
      this.getValue(value);
    } else {
      this.setState({
        userList: []
      })
    }

  }
  clearSearch() {
    this.setState({
      username: "",
      userList: []
    })
  }
  focusOut() {
    this.setState({
      isFocused: false
    })
  }
  focusIn() {
    this.setState({
      isFocused: true
    })
  }
  getValue = debounce(value => {
    console.log(value);
    let requestOption = {
      url: `https://api.github.com/search/users?q=${value}`,
      method: 'GET'
    }

    requestApi(requestOption).then(res => {
      console.log(res.data);
      this.setState({
        userList: res.data.items
      })
    })
  }, 500)
  submitLogin(login) {
    // this.props.submitLogin(login);
    console.log("login", login);

    this.setState({
      gitUser: login
    })
  }
  render() {
    let userError = this.props.userError;
    let { userList } = this.state;
    let focusedClass = this.state.isFocused || this.state.username.trim().length > 0 ? "isFocused" : ""
    if (this.state.gitUser) {
      return <Redirect to={`/${this.state.username}`} />
    }
    return (

      <Box display="flex" justifyContent="center">
        <Card className="loginForm" boxShadow={3}>
          <h1 className="text-center">Github Timeline</h1>
          <div className="login-page">
            <div className="form">
              <form className="login-form" onSubmit={this.submitLogin}>
                <h3>Provide username to view repositories</h3>
                {userError !== "" ? (
                  <span className="error">{this.props.userError}</span>
                ) : (
                    ""
                  )}
                <div className={`textField ${focusedClass}`}>
                  <label htmlFor="username">username</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.changeValue}
                    autoComplete="off"
                    onBlur={this.focusOut}
                    onFocus={this.focusIn}
                  />
                  {/* {this.state.username.trim().length > 0 && ( */}
                  <Fade in={this.state.username.trim().length > 0}>
                    <IconButton size="small" onClick={this.clearSearch}>
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </Fade>
                  {/* )} */}
                </div>
                {userList.length > 0 && <List component="nav" class="overflowScroll" aria-label="main mailbox folders">
                  {userList.map((item, index) => {

                    return (
                      <ListItem button divider onClick={(e) => this.submitLogin(item.login)} key={item.login}>
                        <ListItemAvatar>
                          <Avatar alt="Travis Howard" src={item.avatar_url} />
                        </ListItemAvatar>
                        <ListItemText primary={item.login} />
                      </ListItem>)
                  })}
                </List>}
                {/* <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.name}
              onChange={this.changeValue}
            /> */}
                {/* <input
              type="text"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.changeValue}
            /> */}
                {/* <button disabled={disabled}>Submit</button> */}
              </form>
            </div>
          </div>
        </Card></Box>
    );
  }
}

export default LoginUser;
