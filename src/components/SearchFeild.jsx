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
      <div className='relative rounded-xl '>
        <input
          type='text'
          value={wordEntered}
          onChange={handleFilter}
          placeholder='search product here'
          className={
            'absolute z-50 right-[26%] top-4 left-4 p-2 h-10 rounded-lg opacity-60 w-[100%] sm:w-45 sm:left-[-10%] md:w-60 lg:w-96 xl:w-[100%] transition-all ease-in-out mt-2 sm:mt-0 xsm:w-[59%] xsm:font-thin xsm:m-1'
          }
        ></input>
      </div>
      <div className='relative flex top-20 left-16 p-2 justify-around'>
        <div className='absolute left-[15%] top-[-50%] flex flex-col justify-between px-2 overflow-y-visible bg-white/95 rounded-lg w-[60%] lg:w-[75%] lg:left-[-5%] md:w-[55%] md:left-[-10%] sm:left-[-25%] sm:w-[70%] sm:px-1 xsm:left-[-40%] xsm:w-[70%]'>
          {filteredData.map((item) => (
            <div key={item.id} className='flex m-auto '>
              <div className='gap-4 rounded p-2 bg-gradient-to-b'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-20 h-auto object-fill lg:w-28 xsm:w-20 md:w-24'
                />
              </div>
              <div className='flex items-center leading-none xsm:text-xs lg:text-lg md:text-base'>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
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
