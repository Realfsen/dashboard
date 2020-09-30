import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function DoubleBox(props) {
    return (
        <div style={props.style}>
            <p>{ props.title }</p>
            <div style={ props.style.svg }>
                <FontAwesomeIcon icon={ props.icon }/>
            </div>
        </div>
    );
}