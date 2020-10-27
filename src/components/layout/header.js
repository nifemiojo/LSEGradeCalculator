import React from 'react';
import lselogo from '../../images/lselogo.png'

export default function Header() {
    return (
        <header>
            <h1>Unofficial LSE Grade Calculator</h1>
            <img src={lselogo} alt="logo" />
        </header>
    )
}
