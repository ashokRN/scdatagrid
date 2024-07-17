import React from "react";
import "../../css/index.css";
interface TableFooterProps {
    range: any[];
    setPage?: Function;
    setRowPerPage?: Function;
    page: number;
    slice: any[];
}
declare const TableFooter: React.FC<TableFooterProps>;
export default TableFooter;
