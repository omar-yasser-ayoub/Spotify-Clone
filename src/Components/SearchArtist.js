import { ReactComponent as ArrowSVG } from '../Assets/ArrowDown.svg';
function SearchArtist(props) {
    return (
      <div className="text-white justify-left items-center grid grid-cols-2 text-sm my-4">
        <div className="inline-flex items-center justify-start">
          <img src={props.img} className="h-2/4 w-3/12 rounded-full"></img>
          <div className="leading-tight text-left ml-4 items">
            <h1 className="font-semibold text-left">{props.artist}</h1>
            <h1 className="font-semibold text-left text-text-grey ">Artist</h1>
          </div>
        </div>
        <div className='inline-flex items-right justify-end text-right'>
          <ArrowSVG width={15} height={15} className="rotate-180"/>
        </div>
      </div>
    );
  }
  
  export default SearchArtist;
  