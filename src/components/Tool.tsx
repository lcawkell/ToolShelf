import * as React from 'react';
import {Component} from 'react';

const Tool = (props:any) => {
    return (
        <span style={{padding:'15px', margin:'5px', boxShadow:'1px 1px 1px 1px #ccc'}}>{props.message}</span>
    );
}

export default Tool;