import { useState } from 'react';

const SearchFeild = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='search product here'
        className={
          'p-1 rounded-xl opacity-60 focus: border-none w-[100%] transition-all ease-in-out'
        }
      ></input>
    </div>
  );
};

export default SearchFeild;
