import React from 'react';
import { PieChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {
        return <PieChart
        accountIds={[4039835]}
        query= "SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDAzOTgzNXxJTkZSQXxOQXw5NzE1MjM1NDk4MjAyMTA4ODY' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
      />;
    }
}