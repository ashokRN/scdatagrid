import React from "react";
import '../../css/index.css';
interface HeaderDataProps {
    Header: string;
    filterable?: boolean;
    accessor: string;
}
interface DataGridProps {
    headerData?: HeaderDataProps[];
    columData?: object[];
    globalSearch?: boolean;
    numOfRows?: number;
    tableTitleName?: string;
    tableTitle?: boolean;
    pagination?: boolean;
    loading?: boolean;
    showMenu?: boolean;
}
declare const DataGrid: React.FC<DataGridProps>;
export default DataGrid;
