import React, { Component } from "react";

export default class Typer extends Component {
    state = {
        wordIndex: 0,
        isDeleting: false,
        txt: ""
    };
    type() {
        const { words } = this.props;
        const { wordIndex, isDeleting, txt } = this.state;
        const current = wordIndex % words.length;
        const fullTxt = words[current];

        if (isDeleting) {
            this.setState({
                txt: fullTxt.substring(0, txt.length - 1)
            });
        } else {
            this.setState({
                txt: fullTxt.substring(0, txt.length + 1)
            });
        }

        let typeSpeed = 300;

        if (isDeleting) {
            typeSpeed /= 2;
        }
        if (!isDeleting && txt === fullTxt) {
            typeSpeed = 3000;
            this.setState({
                isDeleting: true
            });
        } else if (isDeleting && txt === "") {
            this.setState({
                isDeleting: false
            });
            this.setState({
                wordIndex: wordIndex + 1
            });
            typeSpeed = 500;
        }

        this.timer = setTimeout(() => {
            this.type();
        }, typeSpeed);
    }

    componentDidMount() {
        this.type();
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        return <span className="txt-type">{this.state.txt}</span>;
    }
}
