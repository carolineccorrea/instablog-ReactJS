import React, { Component } from 'react';
import Foto from './Foto';

class Timeline extends Component {
    constructor() {
        super();
        this.state = { fotos:[] ,
        apiKey: ''
        }
    }

    componentDidMount(){
        
        fetch("https://pixabay.com/api/?key="+this.state.apiKey+"&q=yellow+flowers&image_type=photo")
        .then(response => response.json())
        .then(data=>{

           this.setState({fotos: data.hits.map(({webformatURL}) => webformatURL )})
          
           //console.log(this.state.fotos)
           
        })
        
    }
    render() {
        return (
            <div className="fotos container">
               {
                this.state.fotos.map(item => <Foto foto={item}/>)
                    
               }
           
          </div>
        );
    }
}


export default Timeline;