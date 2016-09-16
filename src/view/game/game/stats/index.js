import React, { Component, PropTypes } from 'react';
import parse from './parse';
import style from './index.css';

const tick = () => ({time: Date.now()});

class Stats extends Component {

    constructor (props) {

        super(props);
        this.state = tick();
    }

    tick () {

        this.setState(tick());
        this.clock = window.requestAnimationFrame(() => this.tick());
    }

    componentWillMount () {

        this.tick();
    }

    componentWillUnmount () {

        window.cancelAnimationFrame(this.clock);
    }

    shouldComponentUpdate (_, {time}) {

        return this.state.time < time;
    }

    render () {

        const {viewBox, d} = parse(this.props);

        return (
            <svg className={ style.main } viewBox={ viewBox } preserveAspectRatio="none">
                <path d={ d }/>
            </svg>
        );
    }
}

Stats.propTypes = {
    length   : PropTypes.number.isRequired,
    positions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default Stats;
