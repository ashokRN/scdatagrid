import React from "react";
import "../../css/index.css";


interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange, }) => {

    return <div className="data_grid_searchbar_container">
        <input className="data_grid_searchbar_input" value={value} placeholder="Search..." type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
}

export default SearchBar;