import {Component } from 'react'

const red =  {
    color: "Red"
}

class ClassComponent extends Component {

    constructor(props){
        super(props)
        this.state = {showText: false}
        setInterval(() => {
            this.setState({showText : !this.state.showText})
        }, 2000)
    }

    componentWillMount(){
        console.log("Componet will mount is called")
    }

    

    render(){
        let display = this.state.showText ? this.props.message : ''
        return(
            <div className="ComponetDiv">
                <h2>
                    This is the Class Component
                </h2>
                <h3>Here are props: <span style = {red}> {display} </span></h3>


            </div>

        )
    }


}

export default ClassComponent