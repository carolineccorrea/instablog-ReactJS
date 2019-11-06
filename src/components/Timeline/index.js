import React, { Component } from 'react';
import Foto from './Foto';

class Timeline extends Component {
    render() {
        return (
            <div className="fotos container">
                <Foto/>
                <Foto/>
                <Foto/>
                <Foto/>
          </div>
        );
    }
}


export default Timeline;