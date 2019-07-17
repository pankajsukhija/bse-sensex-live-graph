import React from 'react';

export default class TemplateComponent extends React.Component { //
    constructor(props){
        super(props);
        this.state = {
            pageTitle : "TemplateComponent" //
        }
        this.myFunction = this.myFunction.bind(this);
    }

    myFunction(){
        //
    }

    render(){
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
            </div>
        );
    }   
}