import React from "react";
import "../../css/index.css";
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
