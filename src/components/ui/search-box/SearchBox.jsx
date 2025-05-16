import Image from 'next/image';
import SearchIcon from '@/components/icons/SearchIcon.jsx';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <div className='search-wrapper'>
      <div className='search-field'>
        <SearchIcon className='search-icon' />
        <input className='search-input' type='text' placeholder='Search for anything' />
      </div>
      <button className='search-button'>Search</button>
    </div>
  );
};

export default SearchBox;
