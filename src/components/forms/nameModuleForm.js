import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';

export class NameModuleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
    }

    changeHandler = (event) => {
        this.props.onNameChange(event.target.value)
       }

    render() {
        return (
            <div className="formBlock">
                <form>
                    <TextField id="standard-basic" label="Name (Optional)" fullWidth="true" name="name" onChange={this.changeHandler}/>
                    <Typography variant="body1" align="center">Did you take any half-units?</Typography>
                    <ButtonGroup size="small" variant="outlined">
                        <Button onClick={this.props.yesClick}>Yes</Button>
                        <Button onClick={this.props.noClick}>
                            <Link to="/calculation">No</Link>
                        </Button>
                    </ButtonGroup>
                </form>
            </div>
        )
    }
}

export default NameModuleForm
