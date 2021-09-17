
import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
    
    
    render() {
        return (
            <div>
                {/* {console.log(this.props.bands)} */}
                {this.props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} deleteBand={this.props.deleteBand}/>)}
            </div>
        )
    }
}
