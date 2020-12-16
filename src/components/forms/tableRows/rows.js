import { FilledInput, Grid, Input } from '@material-ui/core';
import React, { Component } from 'react';

export class Rows extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const range = n => [...Array(n).keys()]
        const halfUnits = this.props.halfUnits;
        const yearOfStudy = this.props.yearOfStudy;
        const hfuLabel = <label>Half Unit</label>
        if (halfUnits === 0) {
            var normalRows = range(4).map((number) =>
            <tr key={number}>
                <td>{number + 1}</td>
                <td><FilledInput name={yearOfStudy} type="number" placeholder="0" defaultValue="0" inputProps={{max:100, min:0}}/></td>
                {/* <td><input type="number" name={yearOfStudy} min="0" max="100"/></td> */}
            </tr>
            );
        }
        else {
            normalRows = range(4 - halfUnits).map((number) =>
            <tr key={number}>
                <td>{number + 1}</td>
                <td><FilledInput name={yearOfStudy} type="number" placeholder="0" defaultValue="0" inputProps={{max:100, min:0}}/></td>
                {/* <td><input type="number" name={yearOfStudy} min="0" max="100"/></td> */}
            </tr>
            );

            var hfuRows = range(halfUnits*2).map((number) =>
            <tr key={number + 5}>
                <td>{number === 0 || number%2 === 0 ? 1 : 2}</td>
                <td><FilledInput name={yearOfStudy} type="number" placeholder="0" defaultValue="0" inputProps={{max:100, min:0}}/></td>
                {/* <td><input type="number" name={yearOfStudy} min="0" max="100"/></td> */}
            </tr>
            )
        }
        return (
            <Grid container direction="column" spacing={3} alignItems="center">
                <Grid item xs={12}>
                    {normalRows}
                </Grid>
                <Grid item xs={12}>
                    {halfUnits !== 0 ? hfuLabel : null}
                    {hfuRows}
                </Grid>
            </Grid>
        );
    }

}

export default Rows