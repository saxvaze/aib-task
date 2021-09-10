import { DataGrid } from '@material-ui/data-grid';
import './market-list.scss';

const columns = [
    {
        field: 'image_',
        headerName: '',
        width: 50,
        renderCell: (params) => <img src={params.getValue(params.id, 'image')} className="d-block" style={{ width: '30px' }} />
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150
    },
    {
        field: 'symbol',
        headerName: 'Symbol',
        width: 150
    },
    {
        field: 'current_price',
        headerName: 'Price',
        type: 'number',
        width: 150,
        renderCell: (params) =>
            <span>
                <span>$ </span>
                <span>{params.getValue(params.id, 'current_price')}</span>
            </span>
    },
    {
        field: 'high_24h',
        headerName: 'High Price',
        type: 'number',
        width: 150,
        renderCell: (params) =>
            <span>
                <span>$ </span>
                <span>{params.getValue(params.id, 'high_24h')}</span>
            </span>
    },
    {
        field: 'low_24h',
        headerName: 'Low Price',
        type: 'number',
        width: 150,
        renderCell: (params) =>
            <span>
                <span>$ </span>
                <span>{params.getValue(params.id, 'low_24h')}</span>
            </span>
    }
];

function MarketList(props) {
    return (
        <div className="grid-wrapper">
            <div>
                <DataGrid
                    rows={props.data}
                    columns={columns}
                    pageSize={10}
                    onSelectionModelChange={(ids) => props.onRowSelect(ids[0])}
                />
            </div>
        </div>
    );
}

export default MarketList;