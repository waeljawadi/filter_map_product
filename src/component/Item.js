import React from 'react'
import {Component} from 'react'

class Item extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <React.Fragment>
                <p>{this.props.lalist.title}</p>
                <p>{this.props.lalist.stars}</p>
                <p>{this.props.lalist.description}</p>
            </React.Fragment>
        )
    }
}
export default Item