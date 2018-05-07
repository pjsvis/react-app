function RequestData(): IRequestRow[] {
    return [
        {
            description: 'First',
            id: 1,
            name: 'Request-01'
        },
        {
            description: 'Second',
            id: 2,
            name: 'Request-02'
        },
        {
            description: 'Third',
            id: 3,
            name: 'Request-03'
        },
        {
            description: 'Fourth',
            id: 4,
            name: 'Request-04'
        }
    ] as IRequestRow[];
}
export default RequestData;
