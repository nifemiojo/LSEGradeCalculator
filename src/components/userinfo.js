import React, { Component } from 'react'
import HalfUnitForm from './forms/halfUnitForm';
import NameModuleForm from './forms/nameModuleForm'

export class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {isHalfUnit: false};
    }

    handleYesClick() {
        //Set state isHalfUnit to true
        this.setState({
            isHalfUnit: true
        });
   }
   //Need to add a conditional component that renders extra form if isHalfUnit true and else nothing
    render() {
        return (
            <div>
                <h3>Welcome to the LSE Grade Calculator! Please enter your information:</h3>
                <NameModuleForm yesClick={() => this.handleYesClick()}/>
                {this.state.isHalfUnit && <HalfUnitForm/>}
            </div>
        )
    }
}

export default UserInfo
