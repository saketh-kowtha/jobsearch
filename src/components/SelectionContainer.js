/**
 * Author: Saketh Kowtha
 * Description: This file exports SelectionContainer Component which constists of user input feilds 
 */

import React, {Component} from 'react'
import { Button, Input, Dropdown } from 'semantic-ui-react'
import generateCities from './cities.js'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import util from "./utils"
const strings = require("../strings").getStrings()

class SelectionContainer extends Component{
    constructor(){
        super()
        this.state={
            city: "",
            location:"",
            skills: "",
            citiesList:[]
        }
        //this method get citites list from getCities method and updates in state cariable
        generateCities((x) => this.setState({citiesList: x}))
    }

    /**
     * This method is to perform action after clicking search button
     */
    handleClick=(e)=>{
        if(!this.state.city && !this.state.exp && this.state.exp !==0  && !this.state.skills){
            alert(strings.invalid_error)
        }
        else{
            this.getRequest(this.state)
        }            
    }

    /**
     * this method will fetches data from server
     */
     getRequest = (data) => {
        axios.get("https://api.myjson.com/bins/kez8a").then((resp) => {
            if(resp.status === 200 && resp.statusText === "OK"){
                if(resp.data && resp.data.jobsfeed){
                    let result = []
                    let ele = resp.data.jobsfeed
                    let experienceSet = [], locationsSet = [], skillsSet = []                        
                    if(data.exp || data.exp === 0)
                        experienceSet = util.compareExp(data, ele)
                    if(data.city)
                        locationsSet = util.compareLocation(data, ele)
                    if(data.skills)
                        skillsSet = util.compareSkills(data, ele)
                        
                    result = util.removeDuplicates((experienceSet.concat(locationsSet)).concat(skillsSet), "_id")
                   this.props.success(result)
                }
            }
        }).catch((err) => {
            alert(strings.server_error)
        })
    }
    
    
    setCity = (event, {value}) => {
        this.setState({city: value})
    }

    setexp = (event,{value})=>{
        this.setState({exp: value})
    }

    setSkills = (event,{value}) =>{
        this.setState({skills: value})
    }

    render(){

        return(
            <div className="selectionContainer">
              <Dropdown placeholder='Location' ref="location" value={this.state.city} className="inputFeild" search selection options={this.state.citiesList} onChange={this.setCity} />
              <Input placeholder="Use , for multiple skills Ex: Java, C#, Python..." value={this.state.skills} ref="skills" className="inputFeild skills" onChange={this.setSkills} />
              <Dropdown placeholder='Experience' ref="experience" className="inputFeild" value={this.state.exp} search selection options={Array.from(Array(15), (_,x) => ({key:x, value: x, text: x + " to " + (x + 1) + (x === 0 ? " Year" : " Years")}))}  onChange={this.setexp}/>
              <Button content='Search' primary onClick={this.handleClick} />
              <Button circular icon='close' onClick={() => this.setState({city: "", exp:"", skills: ""})}/>
            </div>
        )
    }
  
}
  export default SelectionContainer