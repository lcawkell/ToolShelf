import * as React from 'react';
import {Component} from 'react';

import Tool from './Tool';


export default class ToolShelfMain extends Component<any, any> {

    private constructor(props:any){
       super(props);

        this.state = {
            Tools: [
                <Tool message={`I'm the first tool!`} />,
                <Tool message={`I'm the second tool!`} />
            ]
        }

    }

    componentWillMount(){
        
    }

    componentDidMount(){

    }

    componentWillUnmount(){
       
    }

    render() {

        
        return (
            <div>
                {this.state.Tools}
            </div>
        );
    }
}