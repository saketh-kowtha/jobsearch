import React, {Component}from 'react'
import { Icon, Input } from 'semantic-ui-react'
import ResultCard from './ResultCard'
import 'semantic-ui-css/semantic.min.css'
import util from "./utils"

class ResultComponent extends Component {
    constructor(){
        super()
        this.state = {

        }
        this.expSort = "up"
    }
    handleChange = (event, {value}) =>{
       this.setState({ data: this.props.data.filter((ele) => ele.title.toLocaleUpperCase().indexOf(value.toLocaleUpperCase()) !== -1)})
    }

    experienceSort = () =>{
        console.log(this.props.data)
        this.setState({ data: util.sort(this.props.data, "experience")})
    }


    locationSort = () =>{
        this.setState({ data: util.sort(this.props.data, "location")})
    }

 

    render(){
        return(
            <div>
                <div className="rowCount">
                    <div className="statusLabel">
                        Found {this.props.data.length || 0 } Out of {this.props.data.length || 0 } Records 
                    </div>
                    <div className="sorting">
                        <span><Icon className="sortAction" name="sort alphabet down" onClick={this.experienceSort}/> Experience</span>
                        <span><Icon className="sortAction" name="sort alphabet down" onClick={this.locationSort} /> Location</span>
                    </div>
                </div>
                <div className="searchBar"> 
                <Input icon='search' iconPosition='left' onChange = {this.handleChange} placeholder='Search Jobs By Title...' />

                </div>
                <div className="resultArea">
                        {( (this.state && this.state.data) || this.props.data).map((ele) => <ResultCard data={ele} />)}
                </div>
            </div>

        )
    }
}

  export default ResultComponent