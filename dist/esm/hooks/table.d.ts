declare const useTableHook: (data: Object[], page: number, rowPerPage: number) => {
    slice: Object[];
    range: number[];
};
export default useTableHook;
