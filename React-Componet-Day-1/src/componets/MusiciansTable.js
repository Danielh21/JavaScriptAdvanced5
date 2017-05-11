import {Component} from 'react'


export default class MusiciansTable extends Component{
    

    constructor(props){
        super(props)
        this.state = {filterValue: 0}
        this.myChange = this.myChange.bind(this)
    }

    myChange(evt){
        const val = evt.target.value
        this.setState({filterValue : val})
    }

    render(){
        let data = this.props.data
        const rows = data.filter((m) =>{return m.stars >= this.state.filterValue}).map((m => 
        <tr key= {m.id}>
            <td>{m.id}</td>
            <td>{m.name}</td>
            <td>{m.stars}</td>
        </tr>
        ) )


        return (
            <div className= "StudentTable">
                Show Only Musicians With Stars <input onChange = {this.myChange}/>
                <h3>Grades</h3>
                <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Stars</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </table>
            </div>
        )
    }
}