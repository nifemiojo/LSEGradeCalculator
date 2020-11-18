import React from 'react';
import lselogo from '../../images/lselogo.png'

export default function Header() {
    return (
        <header>
            <img src={lselogo} alt="logo" /><h1>Unofficial LSE Grade Calculator</h1>
        </header>
    )
}
