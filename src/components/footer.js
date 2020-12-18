import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import './footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <Divider/>
            <Grid container justify="space-between" alignItems="center" spacing={0}>
                <Grid item xs={6} md={4} id="leftGrid">
                    <p>&copy;{new Date().getFullYear()} Femi Ojo | All rights reserved</p>
                </Grid>
                <Grid item xs={0} md={4}/>
                <Grid item xs={6} md={4} id="rightGrid">
                    <a 
                    href="https://info.lse.ac.uk/staff/divisions/academic-registrars-division/Teaching-Quality-Assurance-and-Review-Office/Assets/Documents/Calendar/BA-BSc-Three-Year-scheme-for-students-from-2018.19.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Latest LSE Grade Classification Scheme
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
