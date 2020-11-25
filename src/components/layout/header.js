import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import ulgc_logo from '../../images/ulgc_logopack_2/ulgc_logo_blk.png';
import '../../App.css';

export default function Header() {
    return (
        <AppBar>
            <Toolbar>
                <Link to="/">
                    <img src={ulgc_logo} alt="logo" id="logo" />
                </Link>
            </Toolbar>
        </AppBar>
        /*<header>
            <img src={lselogo} alt="logo" /><h1>Unofficial LSE Grade Calculator</h1>
        </header>*/
    )
}
