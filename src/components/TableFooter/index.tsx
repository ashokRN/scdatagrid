import React from 'react';

interface TableFooterProps {
     range: any[];
     setPage?: Function;
     setRowPerPage?: Function;
     rowPerPage?: number;
     page: number;
     slice: any[];
     btnStyle?: { active?: Object; inActive?: Object };
}

const TableFooter: React.FC<TableFooterProps> = ({
     range = [],
     setPage = () => {},
     setRowPerPage = () => {},
     rowPerPage = 5,
     page = 1,
     slice = [],
     btnStyle,
}) => {
     const [selectedValue, setSelectedValue] = React.useState<number>(rowPerPage);

     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          const value = event.target.value;
          setSelectedValue(Number(value));
          setRowPerPage(Number(value));
     };

     React.useEffect(() => {
          if (slice.length < 1 && page !== 1) {
               setPage(page - 1);
          }
     }, [slice, page, setPage]);

     return (
          <div className='data_grid_pagination_container'>
               <div className='data_grid_show_menu_con'>
                    <div>Rows per Page : </div>
                    <select value={selectedValue} onChange={handleChange}>
                         {[5, 10, 15, 20, 50].map((x, i) => (
                              <option key={i} value={x}>
                                   {x}
                              </option>
                         ))}
                    </select>
               </div>
               <div className='data_grid_pagination_inner_container'>
                    {range.length > 0 &&
                         range.map((item, index) => (
                              <button
                                   key={index}
                                   style={page === item ? btnStyle?.active : btnStyle?.inActive}
                                   className={page === item ? 'pagination_btn_active' : 'pagination_btn'}
                                   onClick={() => setPage(item)}>
                                   {item}
                              </button>
                         ))}
               </div>
          </div>
     );
};

export default TableFooter;
