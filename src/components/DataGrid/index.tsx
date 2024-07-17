import React from "react";
import useTableHook from "../../hooks/table";
import TableFooter from "../TableFooter";
import SearchBar from "../SearchBar";
import '../../css/index.css';

interface HeaderDataProps {
    Header: string,
    sort?: boolean,
    accessor: string
}
interface DataGridProps {
    headerData?: HeaderDataProps[]
    columData?: object[],
    globalSearch?: boolean,
    numOfRows?: number,
    tableTitleName?: string,
    tableTitle?: boolean,
    pagination?: boolean,
    loading?: boolean,
    showMenu?: boolean

}

interface JsonArray extends Array<JsonValue> { }

type JsonValue = string | number | boolean | JsonObject | JsonArray | null | undefined


type JsonObject = { [Key in string]?: JsonValue }


type HeaderData = {
    title: string,
    sort: boolean
}

type HeaderComponentProps = {
    data: any[],
    onSort?: Function
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ data = [], onSort = () => { } }) => {
    return <thead>
        <tr>
            {data.length > 0 ? data.map((item: HeaderData, index) => {
                return <th key={index + 1} 
                    onClick={() => item.sort ? onSort(index) : {}}
                    scope="col">
                        <div className={`th_head${item.sort ? '_sort' : ''}`}>{item.title} {item.sort ? <>↓</> : null}</div> </th>
            }) : <th />}
        </tr>
    </thead>

}

type ColumComponentProps = {
    columData: any[][]
}

const ColumComponet: React.FC<ColumComponentProps> = ({ columData = [] }) => {

    return <React.Fragment>
        {columData.length > 0 ? <tbody>
            {columData.map((colum, index) => (
                <tr key={index}>{colum.map((item, i) => (<td key={i}><div className={`data_grid_colum_cell${i === 0 ? '_center' : ''}`}>{item}</div></td>))}</tr>
            ))}
        </tbody> : <tbody />}
    </React.Fragment>

}



const DataGrid: React.FC<DataGridProps> = ({
    headerData = [],
    columData = [],
    globalSearch = true,
    numOfRows = 5,
    tableTitleName = 'Solution Champ Table',
    tableTitle = true,
    pagination = true,
    loading = false,
    showMenu = true

}) => {

    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [page, setPage] = React.useState<number>(1);
    const [rowPerPage, setRowPerPage] = React.useState<number>(numOfRows);
    const [sortArr, setShortArr] = React.useState<any[][]>([]);
    const { slice, range } = useTableHook(columData, page, rowPerPage);


    const _getHeadData = (data: HeaderDataProps[]) => {

        let headArrData: Object[] = [{ title: "Sl.No", sort: false }];

        for (let index = 0; index < data.length; index++) {
            headArrData.push({ title: data[index]["Header"], sort: data[index]["sort"] ?? false });
        }
        return headArrData;

    }

    const _getSortArray = (columDataObj: any[][], sortIdex: number) => {
        let newSortedArr: any[][];
        newSortedArr = columDataObj.sort((a, b) => a[sortIdex].localeCompare(b[sortIdex]));
        setShortArr(newSortedArr);

    }

    const _getBodyData = (rowData: HeaderDataProps[], columData: object[]) => {
        let columDataArrList = [];
        for (let index = 0; index < columData.length; index++) {
            let colum = [];
            for (let j = 0; j < rowData.length; j++) {
                let obj: JsonObject = columData[index];
                let accessor = rowData[j].accessor;
                let tempObj: any;
                if (accessor.includes(".")) {
                    let notationArr = accessor.split('.');
                    for (let k = 0; k < notationArr.length; k++) {
                        const element = notationArr[k];
                        if (k === 0) tempObj = obj[element];
                        else tempObj = tempObj[element];

                    }
                    colum.push(tempObj);
                }
                else colum.push(obj[accessor]);
            }
            columDataArrList.push([index + 1, ...colum]);
        }
        return columDataArrList;

    }

    const filterRowSort = (data: any[][]) => {
        return data.filter((row) =>
            row.some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            ));
    };


    const HeaderMemoData = React.useMemo(() => _getHeadData(headerData), [headerData]);
    const ColumMemoData = React.useMemo(() => _getBodyData(headerData, pagination ? slice : columData), [slice, pagination, columData, headerData])



    return <div className="data_grid_container">
        {tableTitle && <div className="data_grid_title_container">
            <div className="data_grid_title_name">{tableTitleName}</div></div>}
        <div className="data_grid_body_container">
            {globalSearch && <SearchBar value={searchTerm} onChange={(value) => setSearchTerm(value)} />}
            {slice.length !== 0 ?
                <React.Fragment>
                    <table className="table table-striped">
                        <HeaderComponent data={HeaderMemoData} onSort={(sortIndex: number) => _getSortArray(_getBodyData(headerData, slice), sortIndex)} />
                        <ColumComponet columData={sortArr.length > 0 ? searchTerm === "" ? sortArr : filterRowSort(sortArr) : searchTerm === "" ? ColumMemoData : filterRowSort(ColumMemoData)} />
                    </table>
                    <TableFooter range={range} slice={slice} setPage={setPage} page={page} setRowPerPage={(dt: number) => setRowPerPage(dt)} />
                </React.Fragment> : <div>Loading...</div>}
        </div>
    </div>
}

export default DataGrid;

