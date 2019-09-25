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

class Reset_pswd extends Component{
    state = {
        id : "",
        pswd: "",
        repswd: "",
        text: ""
    }

    //tokenを含めて送信
    componentDidMount(){
        axios({
            method: '',
            url: SERVER_URL,
            params:{
                route : "get_reset_id"
            }
        }).then(response => {
           this.setState({
            id : response.data
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
    onclick_reset_pswd = () =>{
        alert("reset_pswd");
    }
    
    render(){
        return (
            <Fragment>
                <div className={cx('Login', 'main_div')}>
                    Reset Password
                </div>
                <div className={cx('Login', 'main_div2')}>
                    <div>
                        <Input readonly={true} className={cx('Login', 'input')} value={this.state.id}></Input>
                        <br></br><br></br><br></br>
                        <Input placeholder="Password" className={cx('Login', 'input')} name="pswd" onChange={this.onchange_text} value={this.state.pswd}></Input>
                        <br></br><br></br><br></br>
                        <Input placeholder="Re Password" className={cx('Login', 'input')} name="repswd" onChange={this.onchange_text} value={this.state.repswd}></Input>
                        <br></br><br></br><br></br>
                        <Button variant="contained" className={cx('Reset_pswd', 'button1')} onClick={this.onclick_reset_pswd}>設 定</Button>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Reset_pswd;