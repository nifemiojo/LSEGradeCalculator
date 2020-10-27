import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Enter extends Component {
    render() {
        return (
            <div>
                <button type="button">
                    <Link to="/userinfo">Click here to start!</Link>
                </button>
            </div>
        )
    }
}

export default Enter
