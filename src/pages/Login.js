import React, { Component, Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from '../css/Styles.scss';
import {Input, Button, Paper} from '@material-ui/core';
import axios from 'axios';
import * as constants from '../const/constants';
import { Link } from 'react-router-dom';

const SERVER_URL = constants.SERVER_URL;
const REACT_URL = constants.REACT_URL;
const cx = classNames.bind(styles);

class Login extends Component{
    state = {
        id: "",
        pswd: "",
        text: ""
    }

    componentDidMount(){
        axios({
            method: '',
            url: SERVER_URL,
            params:{
                route : "get_admin_message"
            }
        }).then(response => {
           this.setState({
            text : response.data
           });
        }).catch(error => {
            this.setState({
                text : "err"
            });
        })
    }

    onchange_text = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //ログインイベント作成
    onclick_login = () =>{
        alert("login");
    }
    
    render(){
        return (
            <Fragment>
                <div className={cx('Login', 'main_div')}>
                    Login
                </div>
                <div className={cx('Login', 'main_div2')}>
                    <div>
                        <Input placeholder="ID" className={cx('Login', 'input')} name="id" onChange={this.onchange_text} value={this.state.id}></Input>
                        <br></br><br></br><br></br>
                        <Input placeholder="Password" className={cx('Login', 'input')} name="pswd" onChange={this.onchange_text} value={this.state.pswd}></Input>
                        <br></br><br></br><br></br>
                        <Button variant="contained" className={cx('Login', 'button1')} onClick={this.onclick_login}>ログイン</Button>&nbsp;&nbsp;&nbsp;
                        <Link className={cx('Login', 'link')} to="set_pswd"><Button variant="contained" className={cx('Login', 'button2')} >パスワードリセット</Button></Link>
                    </div>
                    <div>
                        <Paper className={cx('Login', 'paper')}> {this.state.text} </Paper>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;