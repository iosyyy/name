import React from "react";
import '../css/Test.css'
import {DatePicker} from 'antd'

export default class TestW extends React.Component {
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
        </h1>
            <DatePicker></DatePicker>
        </div>)
    }
}
