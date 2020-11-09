import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NameModuleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
    }

    changeHandler = (event) => {
        this.setState({name: event.target.value});
       }

    render() {
        return (
            <div>
                <form>
                    <label for="name">Name (Optional)</label>
                    <input type="text" id="name" name="name" onChange={this.changeHandler}/><br/>
                    <label for="modules">Did you take any half-units?</label>
                    <input type="button" value="Yes" onClick={this.props.yesClick}/>
                    <button type="button">
                        <Link to="/calculation">No</Link>
                    </button>
                </form>
            </div>
        )
    }
}

export default NameModuleForm
