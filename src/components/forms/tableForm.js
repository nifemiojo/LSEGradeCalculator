import React, { Component } from 'react'
import Rows from './tableRows/rows'

export class TableForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleSubmit (event) {
        event.preventDefault();
        const url = new URL("http://127.0.0.1:5000/");
        var formData = new FormData(event.target);
        url.search = new URLSearchParams(formData).toString();
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {console.error('Error:', error)});
    }

    render() {
        return (
            <div>
                <h1>Please enter your results below:</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>First Year</label>
                        <table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[0])} yearOfStudy={"fyear"}/>
                        </table>
                        <label>Second Year</label>
                        <table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[1])} yearOfStudy={"syear"}/>
                        </table>
                        <label>Third Year</label>
                        <table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[2])} yearOfStudy={"tyear"}/>
                        </table>
                        <input type="submit" value="Calculate"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TableForm
