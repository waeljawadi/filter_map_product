import React from 'react'
import {Component} from 'react'
import Item from './Item'
class List extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <React.Fragment>
             {this.props.getarticle.map((el,index) => <Item key={index} lalist={el} />)}
            </React.Fragment>
        )
    }
}
export default List