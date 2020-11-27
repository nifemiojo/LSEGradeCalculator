import { Grid } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                {/* <div className="row"> */}
                    {/* column1 */}
                    {/* <div classname="col">
                        <h4>Row Heading</h4>
                        <ul className="list-unstyled">
                            <li>Element1</li>
                            <li>Element2</li>
                            <li>Element3</li>
                        </ul>
                    </div> */}
                    {/* column2 */}
                    {/* <div classname="col">
                        <h4>Row Heading</h4>
                        <ul className="list-unstyled">
                            <li>Element1</li>
                            <li>Element2</li>
                            <li>Element3</li>
                        </ul>
                    </div> */}
                    {/* column3 */}
                    {/* <div classname="col">
                        <h4>Row Heading</h4>
                        <ul className="list-unstyled">
                            <li>Element1</li>
                            <li>Element2</li>
                            <li>Element3</li>
                        </ul>
                    </div> */}
                {/* </div> */}
                {/* <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <h4>Row Heading</h4>
                        <ul className="list-unstyled">
                            <li>Element1</li>
                            <li>Element2</li>
                            <li>Element3</li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Row Heading</h4>
                        <ul className="list-unstyled">
                            <li>Element1</li>
                            <li>Element2</li>
                            <li>Element3</li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Row Heading</h4>
                        <ul className="list-unstyled">
                            <li>Element1</li>
                            <li>Element2</li>
                            <li>Element3</li>
                        </ul>
                    </Grid>
                </Grid> */}
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Femi Ojo | All rights reserved
                    </p>
                    <a href="https://info.lse.ac.uk/staff/divisions/academic-registrars-division/Teaching-Quality-Assurance-and-Review-Office/Assets/Documents/Calendar/BA-BSc-Three-Year-scheme-for-students-from-2018.19.pdf" target="_blank">Latest LSE Grade Classification Scheme</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
