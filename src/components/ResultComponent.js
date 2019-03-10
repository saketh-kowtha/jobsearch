/**
 * Author: Saketh Kowtha
 * Description: This file export ResultComponent which will show multiple ResultCard components based on Array Json
 */

import React, {Component}from 'react'
import { Icon, Input } from 'semantic-ui-react'
import ResultCard from './ResultCard'
import 'semantic-ui-css/semantic.min.css'
import util from "./utils"
const strings = require("../strings").getStrings()

/** class ResultComponent for entire result area which will appear after one sucessfull search */
class ResultComponent extends Component {
    constructor(){
        super()
        this.state = {}
        this.sortOrder = {
            location: "up",
            experience: "up"
        }
        this.searchCount = ""
    }

    /** Search bar onchange function */
    handleChange = (event, {value}) =>{
       let data = this.props.data.filter((ele) => ele.title.toLocaleUpperCase().indexOf(value.toLocaleUpperCase()) !== -1)
       this.setState({ data: data})
       this.searchCount = data.length  
       if(!value || value === "")
        this.searchCount = ""
    }

    /** Sort function for experience sort and locationsort */
    sort = (feild) =>{
        this.setState({ data: util.sort(this.props.data, feild, this.sortOrder[feild])})
        if(this.sortOrder[feild] === "up")
            this.sortOrder[feild] = "down"
        else    
            this.sortOrder[feild] = "up"
    }
 
 

    render(){
        return(
            <div>
                <div className="rowCount">
                    <div className="statusLabel">
                        Found {this.props.data.length || 0 } Out of {this.props.data.length || 0 } Records 
                    </div>
                    <div className="sorting">
                        <span><Icon className="sortAction" name="sort alphabet down" onClick={() => this.sort("experience")}/> {strings.experience}</span>
                        <span><Icon className="sortAction" name="sort alphabet down" onClick={() => this.sort("location")} /> {strings.location}</span>
                    </div>
                </div>
                <div className="searchBar"> 
                    <Input icon='search' iconPosition='left' onChange = {this.handleChange} placeholder='Search Jobs By Title...' /><br/>
                    { (this.searchCount) ? <div><label>Search Works on {this.searchCount} Results </label></div>: ""}
                </div>
                <div className="resultArea">
                        {( (this.state && this.state.data) || this.props.data).map((ele) => <ResultCard data={ele} />)}
                </div>
            </div>
        )
    }
}

  export default ResultComponent