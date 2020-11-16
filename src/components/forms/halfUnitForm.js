import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class HalfUnitForm extends Component {
    constructor(props) {
        super(props);
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.props.onHFUChange(nam, val)
       }

    render() {
        return (
            <div>
                <form>
                    <label>Number of half-units:</label><br/>
                    <label htmlFor="fyear">First-Year</label>
                    <input type="number" id="fyear" name="firstYearHU" onChange={this.changeHandler} min="0" max="3"/>
                    <label htmlFor="syear">Second-Year</label>
                    <input type="number" id="syear" name="secondYearHU" onChange={this.changeHandler} min="0" max="3"/>
                    <label htmlFor="tyear">Third-Year</label>
                    <input type="number" id="tyear" name="thirdYearHU" onChange={this.changeHandler} min="0" max="3"/><br/>
                    <button type="button">
                        <Link to="/calculation">Continue</Link>
                    </button>
                </form>
            </div>
        )
    }
}

export default HalfUnitForm
