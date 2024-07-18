# SCDataGrid Table Library 
	
SCDataGrid React Data Table Component is use to simple datagrid table library.👋

## Key Features 

* Declarative configuration
* Build-In and configuration 
			
	* Sorting
	* Global Search 
	* Pagination 
	* Configure custom styles

## Requirements

SCDataGrid Table Component requires the following be installed in your project:

* React ^18.3.1
* React-Dom ^18.3.1

## Installation 

```npm install scdatagrid```

Or

```yarn add scdatagrid```

## Usage 
Prior to using this package, familiarise yourself with the ```headerData``` structure. To generate your own headerData object and table data as ```columData``` object properties, refer to the code block below.


```
const HeaderData = [{
	Header: 'title', accessor: 'name', sort: true 
}];

```
* ```Header``` - The column header title is set using the header.
* ```accessor``` - The right property to set the column data is located using the accessor.
* ```sort``` - Sort is used to establish a sort according to column data.

Example      
```
const HeaderData = [
          { Header: 'Name', accessor: 'name', sort: true },
          { Header: 'User Name', accessor: 'username', sort: true },
          { Header: 'Email', accessor: 'email' },
          { Header: 'Mobile Number', accessor: 'phone' },
          { Header: 'Company', accessor: 'company.name' },
          { Header: 'City', accessor: 'address.city' },
          { Header: 'Zip Code', accessor: 'address.zipcode' },
     ];
```

Example **columData** from your reference. ```data.json```


```
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]

```

Now, you can import use this ```import { DataGrid } from "scdatagrid"``` from   ```scdatagrid``` package, where you want.

```
import { DataGrid } from "scdatagrid";
import data from "./data.json";

const App: React.FC = () => {

	return <DataGrid headerData={headerData} columData={data} />

}

export default App;
```	

## Props

* ```headerData``` - ```Object[]``` The data table header is configured using headerData.
* ```columData``` - ```Object[]``` The data is passed to this package using columData.
* ```globalSearch``` - ```boolean``` To display or conceal the search bar, use globalSearch.
* ```numOfRows``` - ```number``` The number of rows displayed in the table is indicated by numofRows.
* ```tableTitleName``` - ```string``` Table title text is passed through the table title.
* ```tableTitle``` - ```boolean```  To display or conceal the search bar, use table title.
* ```pagination``` - ```boolean```  To display or conceal the search bar, use pagination.
* ```loading``` - ```boolean```  Before the table is rendered, loading is used to execute the loader.
* ```showMenu``` - ```boolean```  To display or conceal the search bar, use showMenu.
* ```style``` - ```Object```  style is used to set a unique style for a certain component.

## Style Props

* ```tableOutterStyle``` - With the use of these CSS properties, the table's outer container can be changed.
* ```tablestyle``` - This prop is used to apply CSS properties to the table customisation.
* ```tableHeadStyle``` - This prop is used to apply CSS properties to the table header row customisation.
* ```tableHeadItemStyle``` - This prop is used to apply CSS properties to the table header row item customisation.
* ```tableTitle``` - This prop is used to apply CSS properties to the table title customisation.
* ```tableBodyStyle``` - This prop is used to apply CSS properties to the table body row container customisation.
* ```tableBodyItemStyle``` - This prop is used to apply CSS properties to the table body row item container customisation.
* ```searchInputStyle``` - This prop is used to apply CSS properties to the  search bar customisation.
* ```paginationButtonStyle``` - This prop is used to apply CSS properties to the pagination button customisation.


## Creator

Ashokkumar A