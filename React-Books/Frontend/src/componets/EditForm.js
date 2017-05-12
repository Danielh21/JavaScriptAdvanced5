import {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class EditForm extends Component {
    constructor(props){
        super(props)
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        const target = evt.target
        var book = {}
        book.id = this.props.book.id
        book.title = target.title.value
        book.info = target.info.value
        book.moreInfo = target.moreInfo.value
        this.props.bookStore.editBook(book)
    }

    render(){
        var title = this.props.book.title
        var info = this.props.book.info
        var moreInfo = this.props.book.moreInfo
    return(
    <div className="col-md-6">
            <h3>Edit Book? </h3>
        <form onSubmit= {this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text" defaultValue={title} 
                className="form-control" id="title"/>

            </div>
            <div className="form-group">
                <label htmlFor="info">Info</label>
                <input 
                type="text" defaultValue={info}
                className="form-control" id="info"/>

            </div>
            <div className="form-group">
                <label htmlFor="moreInfo">More Info</label>
                <input 
                type="text" defaultValue={moreInfo}
                className="form-control" id="moreInfo"/>
            </div>
                <button className="btn">Save Changes</button>
        </form>
    </div>
    )
 }
}



export default EditForm