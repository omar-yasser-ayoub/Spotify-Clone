import { useState } from 'react';
import { ReactComponent as SearchSVG } from '../Assets/Search.svg';

function SearchBarComponent(props) {
  const [isSearching, setSearching] = useState(false);
  function handleClick() {
    setSearching(!isSearching);
  }
    return (
      <div>
        <div className="inline-flex rounded-md bg-white p-3 mt-4 w-full" onClick={handleClick}>
              <SearchSVG width={20} height={20} className="mx-2 text-black"/>
              <h1 className="text-sm text-black">What do you want to listen to?</h1>
        </div>


        <div className= {isSearching ? 'absolute w-screen h-screen bg-dark-bg left-0 top-0 z-10' : 'hidden' }>
          <div className='bg-search-bar-bg-light h-16 p-4 grid grid-cols-7 w-screen items-center'>
            <div className='bg-search-bar-bg p-2 col-span-6 text-sm text-text-grey rounded-xl inline-flex'>
              <SearchSVG width={20} height={20} className="mr-2 ml-1 text-text-grey"/>
              <input className='bg-search-bar-bg w-full' placeholder="What do you want to listen to?" ></input>
            </div>
            <div onClick={handleClick}>
              <h1 className='text-xs text-center ml-2'>Cancel</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SearchBarComponent;