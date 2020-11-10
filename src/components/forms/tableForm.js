import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Rows from './tableRows/rows'

export class TableForm extends Component {
    render() {
        return (
            <div>
                <h1>Please enter your results below:</h1>
                <form action="http://127.0.0.1:5000/" method="post" target="_blank">
                    <fieldset>
                        <label>First Year</label>
                        <Table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[0])} yearOfStudy={"fyear"}/>
                        </Table>
                        <label>Second Year</label>
                        <Table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[1])} yearOfStudy={"syear"}/>
                        </Table>
                        <label>Third Year</label>
                        <Table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[2])} yearOfStudy={"tyear"}/>
                        </Table>
                        <input type="submit" value="Calculate"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

/* Grades = {
    "firstYear": [0, 0, 0, 0, 0, 0, 0, 0],
    "secondYear": [0, 0, 0, 0, 0, 0, 0, 0],
    "thirdYear": [0, 0, 0, 0, 0, 0, 0, 0]
} */

export default TableForm
