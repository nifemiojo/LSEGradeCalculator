import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core';
import Rows from './tableRows/rows'
import '../../App.css';

export class TableForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            result: null
        }
    } 

    handleSubmit (event) {
        event.preventDefault();
        const url = new URL("http://127.0.0.1:5000/");
        var formData = new FormData(event.target);
        url.search = new URLSearchParams(formData).toString();
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({result: data}))
            .catch(error => {console.error('Error:', error)});
    }

    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        this.props.userName + " you achieved a " + this.state.result + " grade";
    }

    render() {
        return (
            <div>
                <h1>Please enter your results below:</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <Typography variant="body1" align="left">First Year</Typography>
                        <table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[0])} yearOfStudy={"fyear"}/>
                        </table>
                        <Typography variant="body1" align="left">Second Year</Typography>
                        <table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[1])} yearOfStudy={"syear"}/>
                        </table>
                        <Typography variant="body1" align="left">Third Year</Typography>
                        <table>
                            <Rows halfUnits={parseInt(this.props.listOfHFUs[2])} yearOfStudy={"tyear"}/>
                        </table>
                            <Button size="small" variant="outlined" type="submit">Calculate</Button>
                    </fieldset>
                </form>
                <div id="mydiv"></div>
            </div>
        )
    }
}

export default TableForm
