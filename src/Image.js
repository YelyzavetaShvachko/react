import React from 'react';
import logo from './logo.svg';
import './App.css';

class Image extends React.PureComponent {
    render() {
        return (
            <div className="logo-wrapper">
                <div className="logo">
                    <img src={logo} width="100" height="50" />
                </div>
                <span>Class component (via React.PureComponent)</span>
                <hr />
            </div>
        )
    }
}

export default Image