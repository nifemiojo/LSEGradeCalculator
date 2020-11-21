import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ulgc_logo from '../../images/ulgc_logopack_2/ulgc_logo.png';
import '../../App.css';

export default function Header() {
    return (
        <AppBar>
            <Toolbar>
                <img src={ulgc_logo} alt="logo" id="logo" />
            </Toolbar>
        </AppBar>
        /*<header>
            <img src={lselogo} alt="logo" /><h1>Unofficial LSE Grade Calculator</h1>
        </header>*/
    )
}
