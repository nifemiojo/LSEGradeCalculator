import { Button, TextField, Typography } from '@material-ui/core';
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
                    {/* TO DO: Restrict input min=0 and max=0 */}
                    <Typography variant="body1" align="center">Number of half-units:</Typography><br/>
                    <TextField id="fyear" name="firstYearHU" label="First-Year" type="number" placeholder="0" size="medium" defaultValue="0" inputProps={{max:3, min:0}} onChange={this.changeHandler}/>
                    {/* <label htmlFor="fyear">First-Year</label>
                    <input type="number" id="fyear" name="firstYearHU" onChange={this.changeHandler} min="0" max="3"/> */}
                    <TextField id="syear" name="secondYearHU" label="Second-Year" type="number" placeholder="0" size="medium" defaultValue="0" inputProps={{max:3, min:0}} onChange={this.changeHandler}/>
                    {/* <label htmlFor="syear">Second-Year</label>
                    <input type="number" id="syear" name="secondYearHU" onChange={this.changeHandler} min="0" max="3"/> */}
                    <TextField id="tyear" name="thirdYearHU" label="Third-Year" type="number" placeholder="0" size="medium" defaultValue="0" inputProps={{max:3, min:0}} onChange={this.changeHandler}/>
                    {/* <label htmlFor="tyear">Third-Year</label>
                    <input type="number" id="tyear" name="thirdYearHU" onChange={this.changeHandler} min="0" max="3"/><br/> */}
                    <Button size="small" variant="outlined" >
                        <Link to="/calculation">Continue</Link>
                    </Button>
                    {/* <button type="button">
                    </button> */}
                </form>
            </div>
        )
    }
}

export default HalfUnitForm
