import React from "react";
import '../css/Test.css'
import {HashRouter} from "react-router-dom";

export default class Test extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    componentWillMount() {

    }


    // eslint-disable-next-line react/require-render-return
    render() {

        return (<div className="TestStyle"><h1>
            Hello World
        </h1></div>)
    }
}
