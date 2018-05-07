import * as React from 'react';
import { Table } from 'reactstrap';

const RequestListHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
    );
};

const RequestListItem = (props: { request: IRequestRow }) => {
    return (
        <tr>
            <td>{props.request.id}</td>
            <td>{props.request.name}</td>
            <td>{props.request.description}</td>
        </tr>
    );
};

function RequestList(props: { requests: IRequestRow[] }) {
    return (
        <div className="col-6">
            <Table className="table-hover table-sm">
                <RequestListHeader />
                <tbody>
                    {props.requests.map(req => <RequestListItem request={req} key={req.id} />)}
                </tbody>
            </Table>
        </div>
    );
}
export default RequestList;
