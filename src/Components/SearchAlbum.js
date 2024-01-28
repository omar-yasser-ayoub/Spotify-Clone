import { ReactComponent as ArrowSVG } from '../Assets/ArrowDown.svg';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
function SearchAlbum(props) {
  const { globalVariable, updateGlobalVariable } = useContext(AppContext);

  const handleButtonClick = () => {
    if (props.item.type === "album") {

    }
    else {
      updateGlobalVariable(props.item);
    }
  };
    return (
      <div className="text-white justify-left items-center grid grid-cols-2 text-sm my-4" onClick={handleButtonClick}>
        <div className="inline-flex items-center justify-start">
          {props.item.type === "album" ? <img src={props.item.images[0].url} className="h-2/4 w-3/12"/> : <img src={props.item.album.images[0].url} className="h-2/4 w-3/12"/>}
          <div className="leading-tight text-left ml-4 items">
            <h1 className="font-semibold text-left">{props.item.name}</h1>
            {props.item.artists.map((artist, index) => (
            <h1 key={index} className="font-semibold text-left">
              {artist.name}
            </h1>
          ))}
          </div>
        </div>
        <div className='inline-flex items-right justify-end text-right'>
          <ArrowSVG width={15} height={15} className="rotate-180"/>
        </div>
      </div>
    );
  }
  
  export default SearchAlbum;
  