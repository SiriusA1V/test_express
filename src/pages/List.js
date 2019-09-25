import React, { Component, Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from '../css/Styles.scss';
import {Input, Button, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios';
import * as constants from '../const/constants';
import { Link } from 'react-router-dom';

const SERVER_URL = constants.SERVER_URL;
const REACT_URL = constants.REACT_URL;
const cx = classNames.bind(styles);

const columns = constants.LIST_COL;

class List extends Component{

    state = {
        page : 0,
        setPage : 0,
        rowsPerPage : 10,
        setRowsPerPage : 10,

        user_info : {
            id : "1110677",
            name : "choe yohan",
            head_office : "システム開発部",
            office : "ソフトウェア開発部",
            grade : "grade8",
            position : "🐤",
            status : "state1"
        },

        target_info : [
            {id : "1110677",
            name : "choe yohan",
            head_office : "システム開発部",
            office : "ソフトウェア開発部",
            grade : "grade8",
            postion : "🐤",
            status : "state1",
            private_evaluation : "100",
            first_evaluation : "100",
            second_evaluation : "100",
            evaluation_rank : "SS",
            last_evaluation_rank : "SS",
            average: "100",
            first_average: "100",
            second_average: "100",
            average_rank : "SS",
            last_average_rank : "SS"}
        ]
    }

    handleChangePage = (newPage) =>{
        this.setState({
            setPage : newPage
        })
    }

    handleChangeRowsPerPage = (event) =>{
        this.setState({
            setRowsPerPage : event.target.value,
            setPage : 0
        })
    }
        
    render(){
        return(
            <div className={cx('List', 'root_div')}>
                <div className={cx('List', 'main_div')}>
                    <table className={cx('List', 'user_table')}>
                        <tbody className={cx('List', 'tbody')}>
                            <tr><td>{this.state.user_info.id}</td><td>{this.state.user_info.head_office}</td></tr>
                            <tr><td>{this.state.user_info.name}</td><td>{this.state.user_info.office}</td></tr>
                            <tr><td>{this.state.user_info.grade}</td><td>{this.state.user_info.position}</td><td>{this.state.user_info.status}</td></tr>
                        </tbody>
                    </table>
                    <Button color="inherit" className={cx('List', 'button1')}>Logout</Button>
                </div>

                <Paper className={cx('List', 'root')}>
                <div className={cx('List', 'tableWrapper')}>
                    <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                        {columns.map(column => (
                            <TableCell key={column.id}>
                            {column.subject}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.target_info.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                            {columns.map(column => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id}>
                                    {value}
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </div>

                <div className={cx('List', 'sort_div')}>
                    <SearchIcon className={cx('List', 'searchicon')} />
                    <Input placeholder="Search" className={cx('List', 'search_input')}></Input>                
                    <TablePagination
                        className={cx('List', 'TablePagination')}
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={this.state.target_info.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                        'aria-label': 'previous page',
                        }}
                        nextIconButtonProps={{
                        'aria-label': 'next page',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </div>
                </Paper>
                <div className={cx('List', 'navi_div')}>
                    <Link className={cx('Login', 'link')} to="evaluate"><Button　variant="outlined" className={cx('List', 'navi_button')}>評価シート</Button></Link>
                    <Button variant="outlined" className={cx('List', 'navi_button')}>エクスポート</Button>
                </div>
            </div>
        );
    }
}

export default List;