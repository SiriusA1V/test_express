import React, {Component} from 'react';
import {TextField, Button, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import styles from '../css/Styles.scss';
import classNames from 'classnames/bind';
import * as constants from '../const/constants';
import {Link} from 'react-router-dom';
import { fontSize, width } from '@material-ui/system';

const cx = classNames.bind(styles);
const eval_user1 = constants.EVAL_USER1;
const eval_user2 = constants.EVAL_USER2;
const eval_user3 = constants.EVAL_USER3;
const eval_user4 = constants.EVAL_USER4;
const eval_result = constants.EVAL_RESULT;
const final_rank = constants.FINAL_RANK;

class Evaluate extends Component{
    state = {
        user_info : [
            {id : "1110677",
            name : "choe yohan",
            head_office : "システム開発部",
            office : "ソフトウェア開発部",
            grade : "grade8",
            postion : "🐤"}
        ],
        user_info2 : [
            {name : "郡　達彦",
            head_office : "システム開発部",
            office : "ソフトウェア開発部",
            postion : "エキスパート"}
        ],
        user_info3 : [
            {name : "江川　洋",
            head_office : "システム開発部",
            office : "ハードウェア開発部",
            postion : "部長"}
        ],

        result_index : 3,

        result_list_base : {
            index : 0,
            goals_list : "",
            goals : "",
            weight : "",
            result : "",
            user_comment : "",
            user_per : "",
            first_per : "",
            second_per : ""
        },

        result_list : [
            {
                index : 0,
                goals_list : "",
                goals : "",
                weight : "",
                result : "",
                user_comment : "",
                user_per : "",
                first_per : "",
                second_per : ""
            },{
                index : 1,
                goals_list : "",
                goals : "",
                weight : "",
                result : "",
                user_comment : "",
                user_per : "",
                first_per : "",
                second_per : ""
            },{
                index : 2,
                goals_list : "",
                goals : "",
                weight : "",
                result : "",
                user_comment : "",
                user_per : "",
                first_per : "",
                second_per : ""
            }
        ],
        evaluate_state : {
            status : "➀",
            final_user_per : 0,
            final_first_per : 0,
            final_second_per : 0,
            second_result_rank : "",
            middle_user_coment : "",
            middle_first_coment : "",
            final_user_comnet : "",
            final_first_coment : "",
            final_result_rank : "",
            final_result_coment : "",
            final_ability_rank : "",
            final_ability_coment : "",
            feedback_coment : ""
        },
        
        final_weight : 0
    }

    onchange_result_list=(e)=>{
        var sv_last_weight = 0, sv_last_user = 0, sv_last_first = 0, sv_last_second = 0, rank;

        this.state.result_list.map(val =>(
            ""+val.index === e.target.name.split("/")[0] ?
            (
                sv_last_weight += e.target.name.split("/")[1] ===  "weight" ? (isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)) : (isNaN(parseFloat(val.weight)) ? 0 : parseFloat(val.weight)),
                sv_last_user += e.target.name.split("/")[1] ===  "user_per" ? (isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)) : (isNaN(parseFloat(val.user_per)) ? 0 : parseFloat(val.user_per)),
                sv_last_first += e.target.name.split("/")[1] ===  "first_per" ? (isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)) : (isNaN(parseFloat(val.first_per)) ? 0 : parseFloat(val.first_per)),
                sv_last_second += e.target.name.split("/")[1] ===  "second_per" ? (isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)) : (isNaN(parseFloat(val.second_per)) ? 0 : parseFloat(val.second_per))
            )
            : 
            (
                sv_last_weight += isNaN(parseFloat(val.weight)) ? 0 : parseFloat(val.weight),
                sv_last_user += isNaN(parseFloat(val.user_per)) ? 0 : parseFloat(val.user_per),
                sv_last_first += isNaN(parseFloat(val.first_per)) ? 0 : parseFloat(val.first_per),
                sv_last_second += isNaN(parseFloat(val.second_per)) ? 0 : parseFloat(val.second_per)
            )
        ))

        sv_last_user = sv_last_user/this.state.result_index;
        sv_last_first = sv_last_first/this.state.result_index;
        sv_last_second = sv_last_second/this.state.result_index;

        var sv_last = (sv_last_user + sv_last_first + sv_last_second)/3;
        if(sv_last_user !== 0 && sv_last_first !== 0 && sv_last_second !== 0){
            if(sv_last < 70){
                rank = "C";
            }else if(sv_last < 85){
                rank = "B";            
            }else if(sv_last < 95){
                rank = "A-";            
            }else if(sv_last < 100){
                rank = "A";            
            }else if(sv_last < 110){
                rank = "A+";            
            }else if(sv_last < 120){
                rank = "S";            
            }else{
                rank = "SS";            
            }
        }

        const { result_list } = this.state;
        this.setState({
            result_list : result_list.map(
                info => ""+info.index === e.target.name.split("/")[0]
                ? ({...info, [e.target.name.split("/")[1]] : e.target.value})
                : info
            ),
            final_weight : sv_last_weight,
            evaluate_state : {
                ...this.state.evaluate_state,
                final_user_per : sv_last_user,
                final_first_per : sv_last_first,
                final_second_per : sv_last_second,
                second_result_rank : rank
            }
        })
    }

    onclick_add_row=()=>{
        var sv_result_list = JSON.parse(JSON.stringify(this.state.result_list));
        var sv_result_list_0 = JSON.parse(JSON.stringify(this.state.result_list_base));
        sv_result_list_0.index = this.state.result_index;
        sv_result_list.push(sv_result_list_0)

        this.setState({
            result_list : sv_result_list,
            result_index : this.state.result_index+1,
        })
    }

    onchange_coment=(e)=>{
        this.setState({
            evaluate_state : {
                ...this.state.evaluate_state,
                [e.target.name] : e.target.value
            }
        })
    }

    render(){
        var result_list_count = -1;
        return(
            //中央に
            <div className={cx('Evaluate', 'main_div1')}>
            <div className={cx('Evaluate', 'main_div2')}>
                <Paper className={cx('Evaluate', 'user_paper')}>
                <Table stickyHeader  className={cx('Evaluate', 'user_info_table')}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="6">被評価者情報</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                eval_user1.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {this.state.user_info.map(row => {
                            return (
                                <TableRow key={row.id}>
                                {eval_user1.map(column => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_cell')}>
                                        {value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                            <TableRow>
                            {
                                eval_user2.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {this.state.user_info.map(row => {
                            return (
                                <TableRow key={row.id}>
                                {eval_user2.map(column => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_cell')}>
                                        {value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                    </TableBody>
                    </Table>
                </Paper>

                <Paper className={cx('Evaluate', 'user_paper2')}>
                <Table stickyHeader  className={cx('Evaluate', 'user_info_table')}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="6">1次評価者情報</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                eval_user3.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {this.state.user_info2.map(row => {
                            return (
                                <TableRow key={row.id+"1"}>
                                {eval_user3.map(column => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_cell')}>
                                        {value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                            <TableRow>
                            {
                                eval_user4.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {this.state.user_info2.map(row => {
                            return (
                                <TableRow key={row.id+"2"}>
                                {eval_user4.map(column => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_cell')}>
                                        {value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                    </TableBody>
                    </Table>
                </Paper>

                <Paper className={cx('Evaluate', 'user_paper2')}>
                <Table stickyHeader  className={cx('Evaluate', 'user_info_table')}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="6">2次評価者情報</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                eval_user3.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {this.state.user_info3.map(row => {
                            return (
                                <TableRow key={row.id+"1"}>
                                {eval_user3.map(column => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_cell')}>
                                        {value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                            <TableRow>
                            {
                                eval_user4.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {this.state.user_info3.map(row => {
                            return (
                                <TableRow key={row.id+"2"}>
                                {eval_user4.map(column => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_cell')}>
                                        {value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                    </TableBody>
                    </Table>
                </Paper>
            
                <Paper className={cx('Evaluate', 'status_paper')}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="6">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell  className={cx('Evaluate', 'status_cell')} >
                                {this.state.evaluate_state.status}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>
            
               <Button variant="contained" color="primary" className={cx('Evaluate', 'logout_button')}>Logout</Button>

               <Paper className={cx('Evaluate', 'result_paper')}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="8">成果目標　-　評価 <Button onClick={this.onclick_add_row} className={cx('Evaluate', 'add_row_bt')}>行追加</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                eval_result.map(column => (
                                    <TableCell key={column.id} className={cx('Evaluate', 'user_info_col')}>
                                    {column.subject}<br />{column.subject2}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                            {
                                this.state.result_list.map(row => (
                                    <TableRow className={cx('Evaluate', 'input_result_row')} key={"result_row/"+(++result_list_count)}><TableCell colSpan="9" className={cx('Evaluate', 'input_result_cell')}>
                                        {
                                            eval_result.map(column => {
                                                const val = column.id;
                                                return(
                                                    <TextField 
                                                    value={this.state.result_list[result_list_count][val]}
                                                    variant="outlined" 
                                                    multiline rows="6" 
                                                    style={column.style} 
                                                    onChange={this.onchange_result_list} 
                                                    key={result_list_count+"/"+column.id} 
                                                    name={result_list_count+"/"+column.id}></TextField>
                                                )
                                            })
                                        }
                                        <br />
                                        </TableCell></TableRow>
                                ))
                            }
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2" style={{width:"370px"}}>合計100％になるように設定お願いします。⇒</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.final_weight).toFixed(1)+"%"}</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2" style={{width:"380px"}}>合計達成率</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.evaluate_state.final_user_per).toFixed(1)+"%"}</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.evaluate_state.final_first_per).toFixed(1)+"%"}</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.evaluate_state.final_second_per).toFixed(1)+"%"}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="6" style={{textAlign:"right"}}>二次成果評価ランク</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} colSpan="2" >{this.state.evaluate_state.second_result_rank}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>

               <p></p>
               <Paper className={cx('Evaluate', 'result_paper')}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="7">能力評価（職能発揮度評価</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} rowSpan="2" style={{width:"150px"}}>項目</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')} rowSpan="2" style={{width:"300px"}}>項目内容</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2">本人評価</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2">1次評価</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')} rowSpan="2">二次評価</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')}>評価コメント（課題、評価ポイントがある場合記入）</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')}>得点</TableCell>       
                            <TableCell className={cx('Evaluate', 'user_info_col')}>評価コメント（課題、評価ポイントがある場合記入）</TableCell>       
                            <TableCell className={cx('Evaluate', 'user_info_col')}>得点</TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell rowSpan="5"></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="3"></TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.evaluate_state.final_user_per).toFixed(1)+"%"}</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')} ></TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.evaluate_state.final_first_per).toFixed(1)+"%"}</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >{(this.state.evaluate_state.final_second_per).toFixed(1)+"%"}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="5" style={{textAlign:"right"}}>二次能力評価ランク</TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} colSpan="2" >{this.state.evaluate_state.second_result_rank}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>
            
                <p></p>
               <Paper className={cx('Evaluate', 'result_paper')}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2">中間面談</TableCell>    
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2">期末面談</TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')}>本人コメント</TableCell>
                            <TableCell className={cx('Evaluate', 'user_info_col')}>一次評価者コメント</TableCell>       
                            <TableCell className={cx('Evaluate', 'user_info_col')}>本人コメント</TableCell>       
                            <TableCell className={cx('Evaluate', 'user_info_col')}>一次評価者コメント</TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'result_result')} >
                                                    <TextField 
                                                    variant="outlined" 
                                                    style={{width:"335px"}}
                                                    multiline rows="6" 
                                                    name="middle_user_coment"
                                                    onChange={this.onchange_coment}
                                                    value={this.state.evaluate_state.middle_user_coment}></TextField>
                            </TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >
                                                    <TextField 
                                                    variant="outlined" 
                                                    style={{width:"335px"}}
                                                    multiline rows="6" 
                                                    name="middle_first_coment"
                                                    onChange={this.onchange_coment}
                                                    value={this.state.evaluate_state.middle_first_coment}></TextField>
                            </TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >
                                                    <TextField 
                                                    variant="outlined" 
                                                    style={{width:"335px"}}
                                                    multiline rows="6" 
                                                    name="final_user_coment"
                                                    onChange={this.onchange_coment}
                                                    value={this.state.evaluate_state.final_user_comnet}></TextField>
                            </TableCell>
                            <TableCell className={cx('Evaluate', 'result_result')} >
                                                    <TextField 
                                                    variant="outlined" 
                                                    style={{width:"335px"}}
                                                    multiline rows="6" 
                                                    name="final_first_coment"
                                                    onChange={this.onchange_coment}
                                                    value={this.state.evaluate_state.final_first_coment}></TextField>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>
            
                <p></p>
               <Paper className={cx('Evaluate', 'result_paper')}>
                <Table>
                    <TableHead>
                        
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'user_info_col')} rowSpan="3">最終評価</TableCell>    
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2">成果評価</TableCell>    
                            <TableCell className={cx('Evaluate', 'user_info_col')} colSpan="2">能力評価</TableCell> 
                        </TableRow>
                        <TableRow>  
                            <TableCell className={cx('Evaluate', 'user_info_col')} style={{width:"150px"}}>最終評価ランク</TableCell>   
                            <TableCell className={cx('Evaluate', 'user_info_col')}>最終評価コメント</TableCell>   
                            <TableCell className={cx('Evaluate', 'user_info_col')} style={{width:"150px"}}>最終評価ランク</TableCell>   
                            <TableCell className={cx('Evaluate', 'user_info_col')}>最終評価コメント</TableCell> 
                        </TableRow>
                        <TableRow>  
                            <TableCell className={cx('Evaluate', 'result_result')}>
                            <TextField 
                                variant="outlined" 
                                multiline rows="1" 
                                InputProps={{style:{fontSize:64}}}
                                name="final_result_rank"
                                onChange={this.onchange_coment}
                                value={this.state.evaluate_state.final_result_rank}
                                ></TextField>
                            </TableCell> 
                            <TableCell className={cx('Evaluate', 'result_result')}>
                            <TextField 
                                variant="outlined" 
                                style={{width:"510px"}}
                                multiline rows="4" 
                                name="final_result_coment"
                                onChange={this.onchange_coment}
                                value={this.state.evaluate_state.final_result_coment}
                                ></TextField>
                            </TableCell> 
                            <TableCell className={cx('Evaluate', 'result_result')}>
                            <TextField 
                                variant="outlined" 
                                multiline rows="1" 
                                name="final_ability_rank"
                                onChange={this.onchange_coment}
                                InputProps={{style:{fontSize:64}}}
                                value={this.state.evaluate_state.final_ability_rank}
                                ></TextField>
                            </TableCell> 
                            <TableCell className={cx('Evaluate', 'result_result')}>
                            <TextField 
                                variant="outlined" 
                                style={{width:"510px"}}
                                multiline rows="4" 
                                name="final_ability_coment"
                                onChange={this.onchange_coment}
                                value={this.state.evaluate_state.final_ability_coment}
                                ></TextField>
                            </TableCell> 
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>
            
                <p></p>
                <Paper className={cx('Evaluate', 'feedback_paper')}>
                <Table>
                    <TableHead></TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={cx('Evaluate', 'feedback_col')}>コメント</TableCell>  
                            <TableCell className={cx('Evaluate', 'result_result')}>
                                <TextField 
                                    variant="outlined" 
                                    style={{width:"100%"}}
                                    multiline rows="2" 
                                    name="feedback_coment"
                                    InputProps={{style:{color:"red"}}}
                                    onChange={this.onchange_coment}
                                    value={this.state.evaluate_state.feedback_coment}
                                    ></TextField>    
                            </TableCell>    
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>

                <Link className={cx('Login', 'link')} to="/"><Button variant="contained" color="primary" className={cx('Evaluate', 'bottom_button')}>戻る</Button></Link>
                <Button variant="contained" color="primary" className={cx('Evaluate', 'bottom_button')}>差戻し</Button>
                <Button variant="contained" color="primary" className={cx('Evaluate', 'bottom_button')}>確定</Button>
                <Button variant="contained" color="primary" className={cx('Evaluate', 'bottom_button')}>一時保存</Button>
            </div>
            </div>
        );
    }
}


export default Evaluate;