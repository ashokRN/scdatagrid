# SCDataGrid Table Library 
	
		
Creating yet another React table library came out of necessity while developing a web application for a growing startup. I discovered that while there are some great table libraries out there, some required heavy customization, were missing out of the box features such as built in sorting and pagination, or required understanding the atomic structure of html tables.

If you want to achieve balance with the force and want a simple but flexible table library give React Data Table Component a chance. If you require an Excel clone, then this is not the React table library you are looking for 👋

## Key Features 

* Declarative configuration
* Build-In and configuration 
			
			* Sorting
			* Global Search 
			* Pagination 
			* Configure custom styles

## Requirements

SCDataGrid Table Component requires the following be installed in your project:

* React 16.8.0+
* React-Dom 16.8.0+

## Installation 

```npm install scdatagrid```

Or

```yarn add scdatagrid```

## Usage 

```
import { DataGrid } from "scdatagrid";
import data from "./data.json";

const App: React.FC = () => {

				return <DataGrid headerData={headerData} columData={data} />

}

export default App;
```	
