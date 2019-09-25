import React, { Component, Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from '../css/Styles.scss';
import {Input, Button, Paper} from '@material-ui/core';
import axios from 'axios';
import * as constants from '../const/constants';
import {Link} from 'react-router-dom';

const SERVER_URL = constants.SERVER_URL;
const REACT_URL = constants.REACT_URL;
const cx = classNames.bind(styles);

class Set_pswd extends Component{
    state = {
        button_event : true,
        mail: "",
    }

    onchange_text = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //reset_passwordベント作成
    set_password = () =>{
        if(this.state.button_event){

            this.setState({
                button_event : false
            })

            axios({
                method: 'post',
                url: SERVER_URL,
                params:{
                    route : "sent_mail",
                    mail : this.state.mail
                }
            }).then(response => {
                if(response.data === "err"){
                    alert("送信に失敗しました。");
                }else{
                    alert("送信しました。");
                }
                this.setState({
                    button_event : true
                })
            }).catch(error => {
                alert("送信に失敗しました。");                
            })
        }
    }
    
    render(){
        return (
            <Fragment>
                <div className={cx('Login', 'main_div')}>
                    Reset Password
                </div>
                <div className={cx('Login', 'main_div2')}>
                    <div>
                        <Input placeholder="Mail" className={cx('Login', 'input')} name="mail" onChange={this.onchange_text} value={this.state.mail}></Input>
                        <br></br><br></br><br></br>
                        <Link className={cx('Login', 'link')} to="login"><Button variant="contained" className={cx('Login', 'button2')} >キャンセル</Button></Link>&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" className={cx('Login', 'button1')} onClick={this.set_password}>送信</Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Set_pswd;