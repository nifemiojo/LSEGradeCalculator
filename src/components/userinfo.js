import React, { Component } from 'react'
import HalfUnitForm from './forms/halfUnitForm';
import NameModuleForm from './forms/nameModuleForm';
import Typography from '@material-ui/core/Typography';
import '../App.css';

export class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.handleHFUChange = this.handleHFUChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.state = {isHalfUnit: false};
    }

    handleNameChange(nameChange) {
        this.props.handleNameChange(nameChange);
    }

    handleHFUChange(nam, val) {
        this.props.onHFUChange(nam, val);
    }

    handleYesClick() {
        //Set state isHalfUnit to true
        this.setState({
            isHalfUnit: !this.state.isHalfUnit
        });
   }

   //Need to add a conditional component that renders extra form if isHalfUnit true and else nothing
    render() {
        return (
            <div id="userInfo">
                <Typography variant='h5' align="center">Please enter your details</Typography>
                <NameModuleForm yesClick={() => this.handleYesClick()} noClick={this.props.handleNoClick} onNameChange={this.handleNameChange}/>
                {this.state.isHalfUnit && <HalfUnitForm onHFUChange={this.handleHFUChange}/>}
            </div>
        )
    }
}

export default UserInfo
