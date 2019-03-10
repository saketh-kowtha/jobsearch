import React, {Component} from 'react'
import { Button, Icon, Segment, Header }  from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import util from "./utils"

class ResultCard extends Component{
    constructor(){
        super()
    }


    render(){
        return (
            <div className="Resultcontainer">
                <Segment attached className="center">
                    <Icon name="building"  size="big"/>
                    <span>{this.props.data.companyname}<span></span></span>
                    <Button positive className="applyBtn" onClick={() => window.location.href = (this.props.data.applylink)}>Apply</Button>
                    {(this.props.data.created) ? <span className="createdLabel">Posted On: {this.props.data.created}</span> : ""}
                    {(this.props.data.type) ? <span className="jobType"><Icon name="briefcase" size="small" />{this.props.data.type}</span>: ""}
                    <Header textAlign="center" className="Resultcontainer">
                        {this.props.data.title}
                        <Header.Subheader textAlign="center" className="resultCardBody">
                           {(this.props.data["jd"]) ? <div className="resultCardDesc">{this.props.data["jd"]}</div> : ""}
                           {(this.props.data.skills) ? <div className="resultCardSkills">{this.props.data.skills}</div> : ""}
                        </Header.Subheader>
                        <Header.Subheader>
                            <div className="resultCardFooter">
                                {(this.props.data.salary) ? <Icon className="detailsIcon" name="rupee sign" size="small" /> : ""} <span>{this.props.data.salary}</span>
                                {(this.props.data.location) ? <Icon className="detailsIcon" name="map marker" size="small" /> : ""} <span>{this.props.data.location}</span>
                                {(this.props.data.source) ? <Icon className="detailsIcon" name="globe" size="small" /> : ""} <span>{this.props.data.source}</span>
                                {(this.props.data.startdata) ? <Icon className="detailsIcon" name="pencil alternate" size="small" /> : ""} <span>{this.props.data.startdata}</span>
                                {(this.props.data.experience) ? <Icon className="detailsIcon" name="computer" size="small" /> : ""} <span>{this.props.data.experience}</span>                                
                            </div>
                        </Header.Subheader>
                    </Header>
                </Segment>
          </div>

        )
    }
}

export default ResultCard