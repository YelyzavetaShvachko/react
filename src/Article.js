import React from 'react';
import Image from './Image'
import './App.css';
import Author from './Author'


class Article extends React.Component {
    render() {
        return (
        <div>
            <Image />
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <span>Class component (via React.Component)</span>
            <hr />
            <Author />
                <span>Functional component (via React.CreateElement)</span>
                <hr />
        </div>
        )
    }
}

export default Article