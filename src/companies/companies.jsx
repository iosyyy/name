import React from "react";

class TextChange extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.props.somechange(event.target.value);
    }

    render() {
        const type = this.props.types === 'c' ? '℃' : '℉';
        return (
            <fieldset>
                <legend>温度的单位为{type}</legend>
                <input value={this.props.temple} onChange={this.handleChange}/>
            </fieldset>
        )
    }

}

export default class Changeit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {temple: '', types: ''}
        this.somecchange = this.somecchange.bind(this);
        this.somefchange = this.somefchange.bind(this);
    }

    somecchange(tem) {
        this.setState({types: 'f', temple: {tem}})
    }

    somefchange(tem) {
        this.setState({types: 'c', temple: {tem}})
    }


    render() {
        let state = this.state
        let tem = Number.parseInt(this.state.temple.tem)
        let types = this.state.types
        let temc = (this.state.types === 'c' ? tem : tem + 1).toString();
        let temf = (this.state.types === 'c' ? tem - 1 : tem).toString();
        if (Number.isNaN(tem)) {
            temc = undefined;
            temf = undefined;
        }
        return (
            <form>
                <TextChange types='c' temple={temc} somechange={this.somecchange}/>
                <TextChange types='f' temple={temf} somechange={this.somefchange}/>
            </form>
        )
    }


}
