import React, { Component } from 'react';

class JobData extends Component {
    render() {
        const {jobInfo} = this.props;
        if (!jobInfo || jobInfo.length === 0) return(<h1>Waiting</h1>)
        return (
            <div className="jobDetails">
                <h1>Customer Number: {jobInfo.customerNumber}</h1>
                <h3>binderyDate: {jobInfo.binderyDate} </h3>
                <h3>completedDate: {jobInfo.completedDate} </h3>
                <h3>customerId: {jobInfo.customerId} </h3>
                <h3>dataProcessingDate: {jobInfo.dataProcessingDate} </h3>
                <h3>dateDue: {jobInfo.dateDue} </h3>
                <h3>dateReceived: {jobInfo.dateReceived} </h3>
                <h3>flightCheckWithBypass: {jobInfo.flightCheckWithBypass} </h3>
                <h3>jobComment: {jobInfo.jobComment} </h3>
                <h3>jobDeleted: {jobInfo.jobDeleted} </h3>
                <h3>jobDocId: {jobInfo.jobDocId} </h3>
                <h3>jobHandle: {jobInfo.jobHandle} </h3>
                <h3>jobId: {jobInfo.jobId} </h3>
                <h3>jobNumber: {jobInfo.jobNumber} </h3>
                <h3>jobPrintsite: {jobInfo.jobPrintsite} </h3>
                <h3>onFlightCheck: {jobInfo.onFlightCheck} </h3>
                <h3>onQcFlightCheck: {jobInfo.onQcFlightCheck} </h3>
                <h3>originalJob: {jobInfo.originalJob} </h3>
                <h3>printDate: {jobInfo.printDate} </h3>
                <h3>productCount: {jobInfo.productCount} </h3>
                <h3>productId: {jobInfo.productId} </h3>
                <h3>productNumber: {jobInfo.productNumber} </h3>
                <h3>purgeDate: {jobInfo.purgeDate} </h3>
                <h3>qcDate: {jobInfo.qcDate} </h3>
                <h3>redo: {jobInfo.redo} </h3>
                <h3>redoJob: {jobInfo.redoJob} </h3>
                <h3>runName: {jobInfo.runName} </h3>
                <h3>shippedDate: {jobInfo.shippedDate} </h3>
                <h3>statusDescription: {jobInfo.statusDescription} </h3>
                <h3>statusdCode: {jobInfo.statusdCode} </h3>
                <h3>updateDate: {jobInfo.updateDate} </h3>
                <h3>updateInitials: {jobInfo.updateInitials} </h3>
            </div>
        )
        
    }
}

export default  JobData