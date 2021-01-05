import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core';
import Rows from './tableRows/rows'
import './tableForm.css';

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
        const url = new URL("https://www.lsegradecalculator.com/api/calculate");
        var formData = new FormData(event.target);
        url.search = new URLSearchParams(formData).toString();
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({result: data}))
            .catch(error => {console.error('Error:', error)});
    }

    componentDidUpdate() {
        if (this.props.userName)
            document.getElementById("displayGrade").innerHTML = this.props.userName + ", you achieved " + this.state.result + " grade"
        else
            document.getElementById("displayGrade").innerHTML = "You achieved " + this.state.result + " grade"
    }

    render() {
        return (
            <div>
                <Typography variant="h5">Please enter your full results below:</Typography>
                    <form onSubmit={this.handleSubmit} id="results-form">
                        <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
                            <Grid container item xs={12} justify="space-evenly" alignItems="flex-start" spacing={0}>
                                <Grid container direction="column" item xs={3} sm={4} alignItems="center" justify="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body1">First Year</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Rows halfUnits={parseInt(this.props.listOfHFUs[0])} yearOfStudy={"fyear"}/>
                                    </Grid>
                                </Grid>
                                <Grid container direction="column" item xs={3} sm={4} alignItems="center" justify="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body1">Second Year</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Rows halfUnits={parseInt(this.props.listOfHFUs[1])} yearOfStudy={"syear"}/>
                                    </Grid>
                                </Grid>
                                <Grid container direction="column" item xs={3} sm={4} alignItems="center" justify="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body1">Third Year</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Rows halfUnits={parseInt(this.props.listOfHFUs[2])} yearOfStudy={"tyear"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Button size="small" variant="outlined" type="submit">Calculate</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" id="displayGrade"></Typography>
                            </Grid>
                        </Grid>
                    </form>
            </div>
        )
    }
}

export default TableForm
