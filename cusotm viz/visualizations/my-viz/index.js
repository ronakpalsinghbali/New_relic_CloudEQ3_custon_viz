import React from 'react';
import Chart1 from './chart-1';
import Chart2 from './chart-2';
import Chart3 from './chart-3';

export default class customviz extends React.Component {
    render() {
        return <div>
            <Chart1 />
            <Chart3 />
            <Chart2 />
        </div>
    }
}