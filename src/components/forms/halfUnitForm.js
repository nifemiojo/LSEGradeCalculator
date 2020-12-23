import { Button, TextField, Typography, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class HalfUnitForm extends Component {

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.props.onHFUChange(nam, val)
    }

    render() {
        return (
            <div className="formBlock">
                <form id="hfuForm">
                    <Typography variant="body1" align="center">Number of half-units:</Typography><br/>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <TextField id="fyear" className="huInput" variant="filled" name="firstYearHU" label="First-Year" type="number" placeholder="0" size="medium" defaultValue="0" inputProps={{max:3, min:0}} onChange={this.changeHandler}/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="syear" className="huInput" variant="filled" name="secondYearHU" label="Second-Year" type="number" placeholder="0" size="medium" defaultValue="0" inputProps={{max:3, min:0}} onChange={this.changeHandler}/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="tyear" className="huInput" variant="filled" name="thirdYearHU" label="Third-Year" type="number" placeholder="0" size="medium" defaultValue="0" inputProps={{max:3, min:0}} onChange={this.changeHandler}/>
                        </Grid>
                        <Grid item xs={3}>
                            <Button size="small" variant="outlined" >
                                <Link to="/calculation">Continue</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default HalfUnitForm
