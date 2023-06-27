/* eslint-disable react/prop-types */
import { useState } from 'react';
const SearchFeild = ({ product: { items } }) => {
  const [wordEntered, setWordEntered] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  console.log(items);
  console.log(wordEntered);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = items.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <div className='relative rounded-xl z-30'>
        <input
          type='text'
          value={wordEntered}
          onChange={handleFilter}
          placeholder='search product here'
          className={
            'absolute z-50 right-[26%] top-4 p-1 h-10 rounded-lg opacity-60 focus:border-none w-[50%] sm:w-64 md:w-80 lg:w-96 xl:w-[100%] transition-all ease-in-out mt-2 sm:mt-0'
          }
        ></input>
      </div>
      <div className='flex flex-col items-center justify-between w-[50%] px-5 m-auto gap-4'>
        {filteredData.map((item) => (
          <div key={item.id} className='flex m-auto justify-between'>
            <div className='bg-gradient-to-b from-sky-600 to-indigo-600 shadow-lg shadow-blue-500 relative rounded p-1 hover:scale-105 transition-all duration-100 ease-in-out grid items-center'>
              <img
                src={item.img}
                alt={item.title}
                className='w-36 h-auto object-fill lg:w-28 -rotate-12 transition-all ease-in-out'
              />
            </div>
            <div className='grid items-center leading-none'>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='flex items-center justify-between w-full px-5'>
        <div className='flex items-center gap-5'>
          <div
            className={`bg-gradient-to-b from-sky-600 to-indigo-600 shadow-lg shadow-blue-500 relative rounded p-3 hover:scale-105 transition-all duration-100 ease-in-out grid items-center`}
          >
            <img
              src={item.img}
              alt={`img/cart-item`}
              className='w-36 h-auto object-fill lg:w-28 -rotate-12 transition-all ease-in-out'
            />
          </div>
          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>
                {item.title}
              </h1>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SearchFeild;
