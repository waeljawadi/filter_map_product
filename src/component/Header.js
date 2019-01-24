import React from 'react'
import {Component} from 'react'

class List extends Component
{
    constructor(props){
        super(props)
        this.state = 
        {
            inputvalue : ""
        }
     //   this.bindvalue = this.bindvalue.bind(this)
    }
    bindvalue = (event) =>{
        this.setState({ inputvalue : event.target.value })
        this.props.search(event.target.value)
    }
    render()
    {
        return(
            <React.Fragment>
                 <from>
                    <p>Header</p> 
                    <input 
                        type="text" 
                        value={this.state.inputvalue} 
                        onChange={this.bindvalue}  />
                </from>
            </React.Fragment>
        )
    }
}
export default List
