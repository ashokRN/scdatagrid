import React from 'react';
import '../../css/index.css';

interface SearchBarProps {
     value: string;
     onChange: (value: string) => void;
     style?: Object;
}

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange, style }) => {
     return (
          <div className='data_grid_searchbar_container'>
               <input
                    className='data_grid_searchbar_input'
                    style={style}
                    value={value}
                    placeholder='Search...'
                    type='text'
                    onChange={(e) => onChange(e.target.value)}
               />
          </div>
     );
};

export default SearchBar;
