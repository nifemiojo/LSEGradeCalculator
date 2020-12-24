import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import ulgc_logo from '../../images/ulgc_logopack_2/ulgc_logo_blk.png';
import './header.css';

export default function Header(props) {
    return (
        <AppBar position="absolute">
            <Toolbar id="tbar">
                <Link to="/" onClick={props.resetNumbers}>
                    <img src={ulgc_logo} alt="LSE Grade Calculator Logo" id="logo" />
                </Link>
            </Toolbar>
        </AppBar>
        /*<header>
            <img src={lselogo} alt="logo" /><h1>Unofficial LSE Grade Calculator</h1>
        </header>*/
    )
}
