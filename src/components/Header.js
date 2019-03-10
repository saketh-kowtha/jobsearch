/**
 * Author: Saketh Kowtha
 * Description: This file exports Header Component 
 */


import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <Image src="images/logo.png" className ="logo"/>
            </div>
        );
    }
}