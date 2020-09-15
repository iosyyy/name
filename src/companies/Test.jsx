import React from "react";
import '../css/Test.css'
import {HashRouter} from "react-router-dom";
import {connect} from "react-redux";

 class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
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

const mapStateToProps = (state) => {
    return {
        state:state
    }
}
export default connect(mapStateToProps)(Test)
