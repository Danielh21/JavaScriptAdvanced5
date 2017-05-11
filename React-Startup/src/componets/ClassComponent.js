import React from 'react'
import {Component } from 'react'

class ClassComponent extends Component {

    componentWillMount(){
        console.log("Componet will mount is called")
    }

    render(){
            


        return(
            <div className="ComponetDiv">
                <h2>
                    This is the Class Component
                </h2>


            </div>

        )
    }


}

export default ClassComponent