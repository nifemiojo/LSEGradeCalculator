import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Rows from './tableRows/rows'

export class TableForm extends Component {
    render() {
        return (
            <div>
                <h1>Please enter your results below:</h1>
                <form>
                    <fieldset>
                        <label>First Year</label>
                        <Table variant="dark">
                            <Rows halfUnits={0}/>
                        </Table>
                        <label>Second Year</label>
                        <Table>
                            <Rows halfUnits={0}/>
                        </Table>
                        <label>Third Year</label>
                        <Table>
                            <Rows halfUnits={0}/>
                        </Table>
                        <input type="submit" value="Calculate"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TableForm
