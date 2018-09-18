import React, { Component } from 'react'

class Keypad extends React.Component{

    logMessage = () =>{
        console.log("Entering password...")
    }

    render(){
        return(
            <input type='password'
                   onKeyUp={this.logMessage}/>
        )
    }

}









export default Keypad