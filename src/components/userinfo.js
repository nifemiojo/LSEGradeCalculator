import React, { Component } from 'react'
import NameModuleForm from './forms/nameModuleForm'

export class Userinfo extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the LSE Grade Calculator! Please enter your information:</h3>
                <NameModuleForm />
            </div>
        )
    }
}

export default Userinfo
