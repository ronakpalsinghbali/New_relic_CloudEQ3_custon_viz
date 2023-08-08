import React from 'react';
import { AreaChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {
        return <AreaChart
        accountIds={[4039835]}
        query= "SELECT average(host.memoryUsedPercent) AS 'Memory used %' FROM Metric WHERE `entityGuid` = 'NDAzOTgzNXxJTkZSQXxOQXw0MjcwMzIxNTkyMzExMjk0OTYx' TIMESERIES auto"
        fullWidth
      />;
    }
}