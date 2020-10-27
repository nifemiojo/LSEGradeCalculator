import React, { Component } from 'react'

export class Nameform extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name"/><br/>
                    <label for="modules">Did you take any half-units?</label>
                    <input type="button" value="Yes"/>
                    <input type="button" value="No"/>
                </form>
            </div>
        )
    }
}

export default Nameform
