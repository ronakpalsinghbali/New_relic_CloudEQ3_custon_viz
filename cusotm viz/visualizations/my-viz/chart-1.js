import React from 'react';
import { LineChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {
        return <LineChart
        accountIds={[4039835]}
        query= "SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDAzOTgzNXxJTkZSQXxOQXw5NzE1MjM1NDk4MjAyMTA4ODY' TIMESERIES auto"
        fullWidth
      />;
    }
}